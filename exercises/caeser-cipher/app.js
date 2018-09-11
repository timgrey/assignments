var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var output = ""
var letters = ["a","b","c","d","e","f",'g',"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

while (shift > letters.length) {
    shift -= letters.length
}

for (var i=0; i<input.length; i++) {
    var index = letters.indexOf(input[i])
    if (index === -1) {
        output += input[i]
    } else if ( index + shift >= letters.length) {
        output += letters[index + shift - letters.length]
    } else {
        output += letters[index + shift]
    }
}
console.log(output);
