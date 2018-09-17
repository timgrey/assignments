var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';

while(option !== 2){
  option = ask.keyInSelect(options, "What would you like to do today?: ");
  if (option === 0){
    console.log("You pick some flowers. You make a bouquet.");
  } else if (option === 1) {
    console.log("You shoot guns.");
  }
}

console.log("\n" + "You fought a bear and got beat up!" + "\n");
