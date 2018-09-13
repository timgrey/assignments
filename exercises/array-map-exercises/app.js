// Function 1

function doubleNumbers(arr) {
    return arr.map( x => x * 2);
}

console.log(doubleNumbers([2, 5, 100]));

//Function 2

function stringItUp(arr) {
    return arr.map( x => x.toString())
}

console.log(stringItUp([2, 5, 100]));

//Function 3

function capitalizeNames(arr) {
    return arr = arr.map(x => x.toLowerCase().replace(/\D/, c => c.toUpperCase()));
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//Fucntion 4

function namesOnly(arr){
   return arr.map(x => x.name)
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) )

//Function 5

function makeStrings(arr){
    return arr.map(function(x) {
        if (x.age < 18) {
            return x.name + " is under age!!"
        } else {
            return x.name + " can go to The Matrix"
        }
    })

}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));


//FUNCTION 6

function readyToPutInTheDOM(arr){
    return arr.map(x => "<h1>" + x.name + "</h1><h2>" + x.age + "</h2>")
}

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) )