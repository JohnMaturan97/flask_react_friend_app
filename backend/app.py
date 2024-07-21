# TODO: UPDATE THIS FILE FOR DEPLOYMENT
from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = (
    "postgresql://psqldba:g5fr0nich6CaBo9h@apsql-apm1234567-prdcl01.cti2yaq020bk.us-east-1.rds.amazonaws.com:5432/friends"
)

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# api routes
from routes import *

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
