import json
import random

from flask import Flask, render_template, request

app = Flask(__name__)
DATA = json.load(open('static/data.json'))


@app.route('/')
def main():
    word = random.choice(DATA['5'])
    if request.method == 'GET':
        return render_template('base.html', word=word)
