from flask import Flask, jsonify, request, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from models import db, User, Account, Transaction, bank_database_update
import os

app = Flask(__name__)

app.config["SECRET_KEY"] = "e59ba2ff39ea91d95a57de87558ec8a5"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///site.db"

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
db.init_app(app)

with app.app_context():
    if not os.path.exists("instance/site.db"):
        db.create_all()
        bank_database_update("bank.xlsx")
    else:
        db.create_all()

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

@app.route("/retrieve_account", methods=["GET"])
def retrieve_account():
    accounts = Account.query.all()

    for account in accounts: 
        if account.user_id == account.user.id:
            number = account.account_no

    return jsonify({
        "account_no": number
    })

@app.route("/retrieve_balance", methods=["GET"])
def retrieve_balance():
    accounts = Account.query.all()
    transactions = Transaction.query.all()

    for account in accounts: 
        if account.user_id == account.user.id:
            for transaction in transactions:
                if (transaction.id == 16):
                    balance = transaction.balance_amount

    return jsonify({
        "balance": balance
    })
         

@app.route("/retrieve_transactions", methods=["POST", "GET"])
def display_account_info():
    # loads in initial values for expense categories
    accounts = Account.query.all()
    income = 0
    shopping = 0
    groceries = 0
    billsUtils = 0
    transportation = 0
    misc = 0
    dining = 0

    for account in accounts:
        if account.user_id == account.user.id:
            transactions = Transaction.query.filter_by(account_id=account.id).all()

        for transaction in transactions:
            if (transaction.transaction_details == "Shopping"):
                shopping += transaction.withdrawal_amount
                transaction.expense_shopping = shopping
            elif (transaction.transaction_details == "Groceries"):
                groceries += transaction.withdrawal_amount
                transaction.expense_groceries = groceries
            elif (transaction.transaction_details == "Dining"):
                dining += transaction.withdrawal_amount
                transaction.expense_dining = dining
            elif (transaction.transaction_details == "Bills & Utilities"):
                billsUtils += transaction.withdrawal_amount
                transaction.expense_billsUtils = billsUtils
            elif (transaction.transaction_details == "Transportation"):
                transportation += transaction.withdrawal_amount
                transaction.expense_transportation = transportation
            elif (transaction.transaction_details == "Everything Else"):
                misc += transaction.withdrawal_amount
                transaction.expense_everything_else = misc
            elif (transaction.transaction_details == "Income"):
                income += transaction.deposit_amount
                transaction.income = income

    db.session.commit()

    return  jsonify({
        "shopping" : shopping,
        "groceries": groceries,
        "billsUtils" : billsUtils,
        "transportation" : transportation,
        "income" : income,
        "dining" : dining,
        "everything_else" : misc
    })

@app.route("/input_expense", methods=["POST"])
def input_expense():
    data = request.get_json()
    accounts = Account.query.all()

    # "category" - income, groceries, shopping, dining, billsUtils, transportation, everything_else
    # "amount" - amount to input 

    for account in accounts:
        transactions = Transaction.query.filter_by(account_id=account.id).all()
        for transaction in transactions:
            if data.get('category') == "income":
                transaction.income += data.get('amount')
            elif data.get('category') == "groceries":
                transaction.expense_groceries += data.get('amount')
            elif data.get('category') == "shopping":
                transaction.expense_shopping += data.get('amount')
            elif data.get('category') == "dining":
                transaction.expense_shopping += data.get('amount')
            elif data.get('category') == "billsUtils":
                transaction.expense_billsUtils += data.get('amount')
            elif data.get('category') == "transportation":
                transaction.expense_transportation += data.get('amount')
            elif data.get('category') == "everything_else":
                transaction.expense_everything_else += data.get('amount')

    db.session.commit()

    return jsonify ({"category": data.get('category'),
    "amount": data.get('amount') 
    })

@app.route("/accounts", methods=["GET"])
def get_all_accounts():
    try:
        accounts = Account.query.all()

        response = "Account Numbers and Transactions:\n\n"

        for account in accounts:
            response += f"Account Number: {account.account_no}\n"
            transactions = Transaction.query.filter_by(account_id=account.id).all()
            for transaction in transactions:
                response += f"  Transaction ID: {transaction.id}\n"
                response += f"    Date: {transaction.date.strftime('%Y-%m-%d')}\n"
                response += f"    Details: {transaction.transaction_details}\n"
                response += f"    Withdrawal Amount: {transaction.withdrawal_amount}\n"
                response += f"    Balance Amount: {transaction.balance_amount}\n"
                response += f"    Deposit Amount: {transaction.deposit_amount}\n"
                response += f"    Income Amount: {transaction.income}\n"
            response += "\n"

        return response, 200
    
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return "An error occurred while processing the request", 500
    
if __name__ == "__main__":
    app.run(debug=True, port=8080)