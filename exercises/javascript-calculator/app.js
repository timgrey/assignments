var rs = require("readline-sync");
var math = require("./math.js");

console.log("**************************************************************")
var num1 = +rs.question("\nEnter your first number: ")
var num2 = +rs.question("\nEnter your second number: ")
var options = [ " + ", " - ", " * ", " / "]
var i = rs.keyInSelect(options, "Which Operation would you like to perform?");
var output = 0;

if (i === 0) {
    output = math.add(num1, num2);
} else if (i === 1) {
    output = math.subtract(num1, num2);
} else if (i === 2) {
    output = math.multiply(num1, num2);
} else {
    output = math.divide(num1, num2);
}

console.log("\rThe answer is: " + output)
