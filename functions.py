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
    if request.form['submit'] == 'a':
        print("a")
    elif request.form['submit'] == 'Do Something Else':
        pass  # do something else
    else:
        pass  # unknown


@app.route('/a')
def letter_a():
    print('a')
    return render_template('base.html', word='a')


@app.route('/b')
def letter_b():
    print('b')
    return render_template('base.html', word='b')


@app.route('/c')
def letter_c():
    print('c')
    return render_template('base.html', word='c')


@app.route('/d')
def letter_d():
    print('d')
    return render_template('base.html', word='d')


@app.route('/e')
def letter_e():
    print('e')
    return render_template('base.html', word='e')

# if __name__ == '__main__':
#     # app.run(port=8000, host='localhost')
