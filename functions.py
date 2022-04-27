import json
from flask import Flask, render_template, request

app = Flask(__name__)
DATA = json.load(open('static/data.json'))


@app.route('/')
def main():
    if request.method == 'GET':
        return render_template('base.html', state=dict(words=DATA['5']))


@app.route('/calc')
def second():
    if request.method == 'GET':
        return render_template('easter.html')
