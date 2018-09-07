var rs = require("readline-sync");

var firstName = rs.question("\nWhat is your first name? ")
var lastName = rs.question("\nWhat is your last name? ")
var age = rs.question("\nHow old are you? ")
var color = rs.question("\nWhats your favorite color? ")
var about = rs.question("\nTell me about yourself: ")

console.log("********************************************************************************************************************")
console.log("\nHello " + firstName + " " + lastName + ",\n\n\tI see that your favorite color is " + color.toUpperCase() + " and that you " + age + " years old!")
console.log("\n\tYour full name has " + (firstName.length + lastName.length) + " characters in it!")
console.log('\n\tSo I only heard the last part about yourself when you said "' + about.substr(about.length/2) + '".')
console.log("\n\tBut luckly i have a recording of our conversation and can repeat it back from any point in the message!")
console.log("\n\t*Which index would you like me to start on when recalling when you told me about yourself?")
var strStart = rs.question("\r\t*Please enter a number between 0 and " + (about.length - 1) + " :")
console.log('\n\tHere is the message from index ' + strStart + ': "' + about.substr(strStart) + '"\n')
