from flask import Flask, jsonify, request, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from models import db, User, Account, Transaction, bank_database_update

app = Flask(__name__)

app.config["SECRET_KEY"] = "e59ba2ff39ea91d95a57de87558ec8a5"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///site.db"

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
db.init_app(app)

with app.app_context():
    db.create_all()
    bank_database_update("bank.xlsx")

@app.route("/")
def hello_world():
    return "<p>Hello, World</p>"

@app.route("/signup", methods=["POST"])
def signup():
    email = request.json["email"]
    password = request.json["password"]

    existing_user = User.query.filter_by(email=email).first() is not None

    if existing_user:
        return jsonify({"error": "Email already exists"}), 409

    encrypt_pw = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=encrypt_pw)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.id

    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })

@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized Access"}), 401
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized, incorrect password"}), 401

    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "email": email
    })

@app.route("/retrieveAccount", methods=["GET"])
def retrieveAccount():
    accounts = Account.query.all()

    for account in accounts: # don't need to perform check
        number = accounts.account_no

    return jsonify({
        "account_no": number
    })
         

@app.route("/retrieveTransactions", methods=["GET"])
def display_account_info():
    accounts = Account.query.all()
    income = 0
    shopping = 0
    groceries = 0
    billsUtils = 0
    transportation = 0
    misc = 0
    dining = 0

    for account in accounts:
        transactions = Transaction.query.all()

        for transaction in transactions:
            if (transaction.transaction_details == "Shopping"):
                shopping += transaction.withdrawal_amount
            elif (transaction.transaction_details == "Groceries"):
                groceries += transaction.withdrawal_amount
            elif (transaction.transaction_details == "Dining"):
                dining += trasaction.withdrawal_amount
            elif (transaction.transaction_details == "Bills & Utilities"):
                billsUtils += trasaction.withdrawal_amount
            elif (transaction.transaction_details == "Transportation"):
                transportation += transaction.withdrawal_amount
            elif (transaction.transaction_details == "Everything Else"):
                misc += transaction.withdrawal_amount
            elif (transaction.transaction_details == "Income"):
                income += transaction.deposit_amount

    return  jsonify({
        "shopping" : shopping,
        "groceries": groceries,
        "billsUtils" : billUtils,
        "transportation" : transportation,
        "income" : income,
        "dining" : dining,
        "everything_else" : misc
    })


if __name__ == "__main__":
    app.run(debug=True, port=8080)