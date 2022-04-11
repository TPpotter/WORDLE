var letters = {
"11" : '',
"12" : '',
"13" : '',
"14" : '',
"15" : '',
};
var id = '';
console.log('Hello World');
function change_letter(character) {
    var key;
  console.log('loadDoc is fired');
  var keys = Object.keys(letters).sort();
  for (key in keys) {
    if (!letters[keys[key]])
        break;
  }
  if (character === 'a') {
    document.getElementById(keys[key]).src = 'static/buttons/letter1.png';
    }

  if (character === 'b') {
       document.getElementById(keys[key]).src = 'static/buttons/letter2.png';
    }
  letters[keys[key]] = character

}


function a() {

    change_letter('a')
}

function b() {
    change_letter('b')
}
