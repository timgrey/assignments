// #1

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var computerCount = 0
for(var i=0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        computerCount++
    }
}
console.log(computerCount)


// #2

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
]

for (var i=0; i<peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        var pronoun = "She"
    } else {
        var pronoun = "He"
    }
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. " + pronoun + "'s good to go.")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " has to go home. " + pronoun + " is NOT old enough.")
    }
}

//Optional Bonus Challenge

var arrays = [ [2, 5, 435, 4, 3], [1, 1, 1, 1, 3], [9, 3, 4, 2] ]
for (var i=0; i<arrays.length; i++) {
    var x = arrays[i].reduce( (a,b) => a+b)
    if (x%2 === 0) {
        console.log("off")
    } else {
        console.log("on")
    }
}