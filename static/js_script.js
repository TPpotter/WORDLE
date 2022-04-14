var inp = document.currentScript.getAttribute('one')
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

var letters = {
"11" : '', "12" : '', "13" : '', "14" : '', "15" : '',
"21" : '', "22" : '', "23" : '', "24" : '', "25" : '',
"31" : '', "32" : '', "33" : '', "34" : '', "35" : '',
"41" : '', "42" : '', "43" : '', "44" : '', "45" : '',
"51" : '', "52" : '', "53" : '', "54" : '', "55" : '',
"61" : '', "62" : '', "63" : '', "64" : '', "65" : '',
"66": ''
};

var characters = {
'a': '1', 'b': '2', 'c': '3', 'd': '4', 'e': '5', 'f': '6', 'g': '7', 'h': '8',
'i': '9', 'j': '10', 'k': '11', 'l': '12', 'm': '13', 'n': '14', 'o': '15', 'p': '16',
'q': '17', 'r': '18', 's': '19', 't': '20', 'u': '21', 'v': '22', 'w': '23',
'x': '24', 'y': '25', 'z': '26'
}
var stop = false

var id = '';

function change_letter(character) {
  if (stop) {
    console.log('function is stopped');
    return; }
//  console.log('loadDoc is fired');
  var keys = Object.keys(letters).sort();
  for (key in keys) {
    if (keys[key] === '66') {
        stop = true;
    }
    if ((keys[key][0] === row) && ((letters[keys[key]]) === '')) {
        id = keys[key];
        if (keys[key] === '65') {
        stop = true; }
        break; }

  }

  if (id === '66') {
    console.log('66')
    return
  }
  document.getElementById(id).src = 'static/buttons/letter'+ characters[character] +'.png';
  letters[keys[key]] = character
}
function check_word(checking_word){
//    for (i in checking_word) {
//        if i
//    }
}

function enter() {
    if ((letters[String(row + '5')] === '') || (row === '6')) {
        return; }
    check_word(letters[row + '1'] + letters[row + '2'] + letters[row + '3'] + letters[row + '4'] + letters[row + '5']);
    row = String(Number(row) + 1);
    stop = false;

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

function n() {
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