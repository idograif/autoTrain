import flask
from flask_cors import CORS
from bl import *

app = flask.Flask(__name__)
CORS(app)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1>"


@app.route('/order/<id_num>/<phone>/<from_name>/<to_name>', methods=['GET'])
def order(id_num, phone, from_name, to_name):
    orderTrain(id_num, phone, email, from_name, to_name)
    return "<h1>cool placing order</h1>"


app.run()
