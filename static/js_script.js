var data = state['words']
//var inp = data[Math.floor(Math.random() * data.length)];
var inp = "aaaaa";
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
'': 'static/input.png',
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

'a1': 'static/correct_buttons/correct_letter1.png', 'b1': 'static/correct_buttons/correct_letter2.png',
'c1': 'static/correct_buttons/correct_letter3.png', 'd1': 'static/correct_buttons/correct_letter4.png',
'e1': 'static/correct_buttons/correct_letter5.png', 'f1': 'static/correct_buttons/correct_letter6.png',
'g1': 'static/correct_buttons/correct_letter7.png', 'h1': 'static/correct_buttons/correct_letter8.png',
'i1': 'static/correct_buttons/correct_letter9.png', 'j1': 'static/correct_buttons/correct_letter10.png',
'k1': 'static/correct_buttons/correct_letter11.png', 'l1': 'static/correct_buttons/correct_letter12.png',
'm1': 'static/correct_buttons/correct_letter13.png', 'n1': 'static/correct_buttons/correct_letter14.png',
'o1': 'static/correct_buttons/correct_letter15.png', 'p1': 'static/correct_buttons/correct_letter16.png',
'q1': 'static/correct_buttons/correct_letter17.png', 'r1': 'static/correct_buttons/correct_letter18.png',
's1': 'static/correct_buttons/correct_letter19.png', 't1': 'static/correct_buttons/correct_letter20.png',
'u1': 'static/correct_buttons/correct_letter21.png', 'v1': 'static/correct_buttons/correct_letter22.png',
'w1': 'static/correct_buttons/correct_letter23.png', 'x1': 'static/correct_buttons/correct_letter24.png',
'y1': 'static/correct_buttons/correct_letter25.png', 'z1': 'static/correct_buttons/correct_letter26.png',

'a2': 'static/half_correct_buttons/half_correct_letter1.png', 'b2': 'static/half_correct/buttons/half_correct_letter2.png',
'c2': 'static/half_correct_buttons/half_correct_letter3.png', 'd2': 'static/half_correct/buttons/half_correct_letter4.png',
'e2': 'static/half_correct_buttons/half_correct_letter5.png', 'f2': 'static/half_correct/buttons/half_correct_letter6.png',
'g2': 'static/half_correct_buttons/half_correct_letter7.png', 'h2': 'static/half_correct/buttons/half_correct_letter8.png',
'i2': 'static/half_correct_buttons/half_correct_letter9.png', 'j2': 'static/half_correct/buttons/half_correct_letter10.png',
'k2': 'static/half_correct_buttons/half_correct_letter11.png', 'l2': 'static/half_correct/buttons/half_correct_letter12.png',
'm2': 'static/half_correct_buttons/half_correct_letter13.png', 'n2': 'static/half_correct/buttons/half_correct_letter14.png',
'o2': 'static/half_correct_buttons/half_correct_letter15.png', 'p2': 'static/half_correct/buttons/half_correct_letter16.png',
'q2': 'static/half_correct_buttons/half_correct_letter17.png', 'r2': 'static/half_correct/buttons/half_correct_letter18.png',
's2': 'static/half_correct_buttons/half_correct_letter19.png', 't2': 'static/half_correct/buttons/half_correct_letter20.png',
'u2': 'static/half_correct_buttons/half_correct_letter21.png', 'v2': 'static/half_correct/buttons/half_correct_letter22.png',
'w2': 'static/half_correct_buttons/half_correct_letter23.png', 'x2': 'static/half_correct/buttons/half_correct_letter24.png',
'y2': 'static/half_correct_buttons/half_correct_letter25.png', 'z2': 'static/half_correct/buttons/half_correct_letter26.png',

'a3': 'static/wrong_buttons/wrong_letter1.png', 'b3': 'static/wrong_buttons/wrong_letter2.png',
'c3': 'static/wrong_buttons/wrong_letter3.png', 'd3': 'static/wrong_buttons/wrong_letter4.png',
'e3': 'static/wrong_buttons/wrong_letter5.png', 'f3': 'static/wrong_buttons/wrong_letter6.png',
'g3': 'static/wrong_buttons/wrong_letter7.png', 'h3': 'static/wrong_buttons/wrong_letter8.png',
'i3': 'static/wrong_buttons/wrong_letter9.png', 'j3': 'static/wrong_buttons/wrong_letter10.png',
'k3': 'static/wrong_buttons/wrong_letter11.png', 'l3': 'static/wrong_buttons/wrong_letter12.png',
'm3': 'static/wrong_buttons/wrong_letter13.png', 'n3': 'static/wrong_buttons/wrong_letter14.png',
'o3': 'static/wrong_buttons/wrong_letter15.png', 'p3': 'static/wrong_buttons/wrong_letter16.png',
'q3': 'static/wrong_buttons/wrong_letter17.png', 'r3': 'static/wrong_buttons/wrong_letter18.png',
's3': 'static/wrong_buttons/wrong_letter19.png', 't3': 'static/wrong_buttons/wrong_letter20.png',
'u3': 'static/wrong_buttons/wrong_letter21.png', 'v3': 'static/wrong_buttons/wrong_letter22.png',
'w3': 'static/wrong_buttons/wrong_letter23.png', 'x3': 'static/wrong_buttons/wrong_letter24.png',
'y3': 'static/wrong_buttons/wrong_letter25.png', 'z3': 'static/wrong_buttons/wrong_letter26.png',
}

var letters = {
"a": 'a', "b": 'b', "c": 'c', "d": 'd', "e": 'e', "f": 'f', "g": 'g', "h": 'h', "i": 'i',
"j": 'j', "k": 'k', "l": 'l', "m": 'm', "n": 'n', "o": 'o', "p": 'p', "q": 'q', "r": 'r',
"s": 's', "t": 't', "u": 'u', "v": 'v', "w": 'w', "x": 'x', "y": 'y', "z": 'z',

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

    var word1 = {}

    for (j in checking_word) {
        if (checking_word[j] in word1) {
            word1[checking_word[j]].push(j); }
        else if (!(checking_word[j] in word1)) {
            word1[checking_word[j]] = [];
            word1[checking_word[j]].push(j);
        }
    }

//    start of checking if all letters are not in word
    var n_ = 0
    for (i in checking_word) {
        if (!(checking_word[i] in word)) {
            n_ = n_ + 1
            letters[checking_word[i]] = checking_word[i] + '3';
            letters[row + (Number(i) + 1)] = checking_word[i] + '3';
        }
    }

    if (n_ === 5) {
        stop = false;
        row = String(Number(row) + 1);
        draw()
    }
//    end of checking if all letters are not in word

    var keys = Object.keys(word).sort();
    for (key in keys) {
        if (!(keys[key] in word1)) {continue}
//        other checking stuff
    }

    return

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

document.addEventListener('keyup', function(event){
    if (!((65 <= event.keyCode <= 90) || (event.key === 'Backspace') || (event.key === 'Enter'))) {
        return
    }
    if ((65 <= event.keyCode) && (event.keyCode <= 90)) {
        change_letter(event.key)
    } else if (event.key === 'Backspace') {
        del()
    } else if (event.key === 'Enter') {
        enter()
    }

});


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

