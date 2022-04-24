var data = state['words']
var inp = data[Math.floor(Math.random() * data.length)];
var word = {};
var n = -1;
for (j in inp) {
    n = n + 1
    if (inp[j] in word) {
        word[inp[j]].push(n); }
    else if (!(inp[j] in word)) {
        word[inp[j]] = [];
        word[inp[j]].push(n);
        }
    }
var row = '1';

var links = {
'a': 'static/buttons/letter1.png', 'b': 'static/buttons/letter2.png',
'c': 'static/buttons/letter3.png', 'd': 'static/buttons/letter4.png',
'e': 'static/buttons/letter5.png', 'f': 'static/buttons/letter6.png',
'g': 'static/buttons/letter7.png', 'h': 'static/buttons/letter8.png',
'i': 'static/buttons/letter9.png', 'j': 'static/buttons/letter10.png',
'k': 'static/buttons/letter11.png', 'l': 'static/buttons/letter12.png',
'm': 'static/buttons/letter13.png', 'n': 'static/buttons/letter14.png',
'o': 'static/buttons/letter15.png', 'p': 'static/buttons/letter16.png',
'q': 'static/buttons/letter17.png', 'r': 'static/buttons/letter18.png',
's': 'static/buttons/letter19.png', 't': 'static/buttons/letter20.png',
'u': 'static/buttons/letter21.png', 'v': 'static/buttons/letter22.png',
'w': 'static/buttons/letter23.png', 'x': 'static/buttons/letter24.png',
'y': 'static/buttons/letter25.png', 'z': 'static/buttons/letter26.png',
'': 'static/input.png'
}

var letters = {
"11" : '', "12" : '', "13" : '', "14" : '', "15" : '',
"21" : '', "22" : '', "23" : '', "24" : '', "25" : '',
"31" : '', "32" : '', "33" : '', "34" : '', "35" : '',
"41" : '', "42" : '', "43" : '', "44" : '', "45" : '',
"51" : '', "52" : '', "53" : '', "54" : '', "55" : '',
"61" : '', "62" : '', "63" : '', "64" : '', "65" : '',
"66": ''
};

var stop = false

var id = '';

function change_letter(character) {
  if (stop) {
    console.log('function is stopped');
    return; }
  var keys = [row + '1', row + '2', row + '3', row + '4', row + '5'];
  for (key in keys) {
    if (keys[key] === '66') {
        stop = true;
    }
    if ((letters[keys[key]]) === '') {
        if (keys[key] === '65') {
            stop = true; }
        break; }

  }

  if (keys[key] === '66') {
    console.log('66')
    return
  }
  letters[keys[key]] = character;
  draw()
}

function check_word(checking_word){
    if (data.indexOf(checking_word) < 0) {
    alert('word "' + checking_word + '" is not in dictionary');
    letters[row + '5'] = '';
    stop = false;
    draw();
    return }

// to make checker
    if (data.indexOf(checking_word) >= 0) {
        alert('great job');
        return
    }
    stop = false;
    row = String(Number(row) + 1);
}

function enter() {
    if ((letters[String(row + '5')] === '') || (row === '6')) {
        return; }
    check_word(letters[row + '1'] + letters[row + '2'] + letters[row + '3'] + letters[row + '4'] + letters[row + '5']);
    stop = false;

}

function del() {
    if (!(letters[row + '1'])) {return}
    var row_ = [row + '1', row + '2', row + '3', row + '4', row + '5'];
    for (n in row_) {
        var element = row_[n];
        if (letters[row + '5']) {
            letters[row + '5'] = '';
            break
        }
        if (letters[row + (Number(element[1]) + 1)] === '') {
            letters[element] = '';
            break
        }

    }
    draw()
}

function draw() {
    var keys = Object.keys(letters).sort();
    for (i in keys) {
        if (!(keys[i] === '66')) {
        document.getElementById(keys[i]).src = links[letters[keys[i]]];
        }
    }
}
function a() {

    change_letter('a')
}

function b() {
    change_letter('b')
}

function c() {
    change_letter('c')
}

function d() {
    change_letter('d')
}

function e() {
    change_letter('e')
}

function f() {
    change_letter('f')
}

function g() {
    change_letter('g')
}

function h() {
    change_letter('h')
}

function i() {
    change_letter('i')
}

function j() {
    change_letter('j')
}

function k() {
    change_letter('k')
}

function l() {
    change_letter('l')
}

function m() {
    change_letter('m')
}

function nn() {
    change_letter('n')
}

function o() {
    change_letter('o')
}

function p() {
    change_letter('p')
}

function q() {
    change_letter('q')
}

function r() {
    change_letter('r')
}

function s() {
    change_letter('s')
}

function t() {
    change_letter('t')
}

function u() {
    change_letter('u')
}

function v() {
    change_letter('v')
}

function w() {
    change_letter('w')
}

function x() {
    change_letter('x')
}

function y() {
    change_letter('y')
}

function z() {
    change_letter('z')
}