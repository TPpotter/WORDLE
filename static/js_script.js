var words = [
['', '', '', '', ''],
['', '', '', '', ''],
['', '', '', '', ''],
['', '', '', '', ''],
['', '', '', '', ''],
['', '', '', '', '']
];
function loadDoc(letter) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
  while true:
    if (words[0][0] + words[0][1] + words[0][2] + words[0][3] + words[0][4]).length < 5:
        id = '1'
        if words[0][0] == '':
            id += '1'
            break
        if words[0][1] == '':
            id += '2'
            break
        if words[0][2] == '':
            id += '3'
            break
        if words[0][3] == '':
            id += '4'
            break
        if words[0][4] == '':
            id += '5'
            break
    else if (words[1][0] + words[1][1] + words[1][2] + words[1][3] + words[1][4]).length < 5:
        id = '2'
        if words[1][0] == '':
            id += '1'
            break
        if words[1][1] == '':
            id += '2'
            break
        if words[1][2] == '':
            id += '3'
            break
        if words[1][3] == '':
            id += '4'
            break
        if words[1][4] == '':
            id += '5'
            break
        break
    else if (words[2][0] + words[2][1] + words[2][2] + words[2][3] + words[2][4]).length < 5:
        id = '3'
        if words[2][0] == '':
            id += '1'
            break
        if words[2][1] == '':
            id += '2'
            break
        if words[2][2] == '':
            id += '3'
            break
        if words[2][3] == '':
            id += '4'
            break
        if words[2][4] == '':
            id += '5'
            break
        break
    else if (words[3][0] + words[3][1] + words[3][2] + words[3][3] + words[3][4]).length < 5:
        id = '4'
        if words[3][0] == '':
            id += '1'
            break
        if words[3][1] == '':
            id += '2'
            break
        if words[3][2] == '':
            id += '3'
            break
        if words[3][3] == '':
            id += '4'
            break
        if words[3][4] == '':
            id += '5'
            break
        break
    else if (words[4][0] + words[4][1] + words[4][2] + words[4][3] + words[4][4]).length < 5:
        id = '5'
        if words[4][0] == '':
            id += '1'
            break
        if words[4][1] == '':
            id += '2'
            break
        if words[4][2] == '':
            id += '3'
            break
        if words[4][3] == '':
            id += '4'
            break
        if words[4][4] == '':
            id += '5'
            break
        break
    else if (words[5][0] + words[5][1] + words[5][2] + words[5][3] + words[5][4]).length < 5:
        id = '6'
        if words[5][0] == '':
            id += '1'
            break
        if words[5][1] == '':
            id += '2'
            break
        if words[5][2] == '':
            id += '3'
            break
        if words[5][3] == '':
            id += '4'
            break
        if words[5][4] == '':
            id += '5'
            break
        break
  if letter == 'a':
    document.getElementById(id).src = 'static/buttons/letter1.png'
  words[int(id[0]) - 1][int(id[1]) - 1] = letter
  }
  xhttp.open("GET", "demo_get.asp");
  xhttp.send();
}

function a() {
    loadDoc('a')
}