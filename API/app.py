from flask import Flask, jsonify
import json
import requests
import pandas as pd
import plotly
import plotly.express as px
from flask_cors import CORS


app= Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Hello, Flask!"


@app.route('/create-csv')
def create_apple_stocks_csv():
    """
        Created the apple_stock_price.csv locally
        using the plotly datasets from github.
    """
    url = 'https://raw.githubusercontent.com/plotly/datasets/master/2014_apple_stock.csv'
    res = requests.get(url, allow_redirects=True)
    with open('apple_stock_price.csv','wb') as file:
        file.write(res.content)    
    return json.dumps('apple stocks csv created')


@app.route('/get-apple-stock-graph')
def get_csv_data():
    df = pd.read_csv('apple_stock_price.csv')
    fig = px.line(df, x="AAPL_x", y="AAPL_y", 
              title='Apple stock price')
    return json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)           