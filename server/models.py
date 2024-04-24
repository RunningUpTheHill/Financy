from flask_sqlalchemy import SQLAlchemy
import pandas as pd
import numpy as np
from uuid import uuid4

from sqlalchemy.orm import relationship

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.Text, nullable=False)
    accounts = relationship("Account", backref="user", lazy=True)

class Account(db.Model):
    __tablename__ = "accounts"
    id = db.Column(db.Integer, primary_key=True)
    account_no = db.Column(db.String(20), nullable=False, unique=True)
    user_id = db.Column(db.String(32), db.ForeignKey("users.id"), nullable=False)
    transactions = relationship("Transaction", backref="account", lazy=True)

class Transaction(db.Model):
    __tablename__ = "transactions"
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    transaction_details = db.Column(db.String(200), nullable=False)
    withdrawal_amount = db.Column(db.Float, nullable=True)
    deposit_amount = db.Column(db.Float, nullable=True)
    balance_amount = db.Column(db.Float, nullable=False)
    account_id = db.Column(db.Integer, db.ForeignKey("accounts.id"), nullable=False)

def bank_database_update(filename):
    from flask_bcrypt import Bcrypt
    bcrypt = Bcrypt()
    df = pd.read_excel(filename)
    df["transaction_details"] = df["transaction_details"].fillna("")

    for index, row in df.iterrows():
        user = User.query.filter_by(email=row["email"]).first()
        if not user:
            user = User(email=row["email"], password=bcrypt.generate_password_hash(row["password"]))
            db.session.add(user)
            db.session.commit()

        account = Account.query.filter_by(account_no=row["Account No"], user_id=user.id).first()
        if not account:
            account = Account(account_no=row["Account No"], user_id=user.id)
            db.session.add(account)
            db.session.commit()

        transaction = Transaction(date=row["date"], transaction_details=row["transaction_details"], withdrawal_amount=row["withdrawal_amount"], deposit_amount=row["deposit_amount"], balance_amount=row["balance_amount"],  account_id=account.id)
        db.session.add(transaction)
        db.session.commit()
