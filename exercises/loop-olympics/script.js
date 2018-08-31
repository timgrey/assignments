for (var i=0; i<10; i++) {
    console.log(i)
}

for (var i=9; i >= 0; i-=1) {
    console.log(i)
}

var fruit = ["banana", "orange", "apple", "kiwi"]
for (var i=0; i<fruit.length; i++) {
    console.log(i)
}

//Bronze Medal

var arr1 = []
for (var i=0; i<10; i++) {
    arr1.push(i)
}

for (var i=0; i < 101; i+=2) {
    console.log(i)
}

var newFruit = []
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (var i=0; i<fruit.length; i++) {
    newFruit.push(i)
}

//Silver Medal

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  for(var i=0; i<peopleArray.length; i++) {
      console.log(peopleArray[i].name)
  }

  var names = []
  var occupations = []
  for(var i=0; i<peopleArray.length; i++) {
     names.push(peopleArray[i].name) 
     occupations.push(peopleArray[i].occupation)
  }

  var names2 = []
  var occupations2 = []
  for(var i=0; i<peopleArray.length; i+=2) {
     names2.push(peopleArray[i].name) 
     occupations2.push(peopleArray[i+1].occupation)
  }

 