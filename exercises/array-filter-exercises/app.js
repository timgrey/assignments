//Function 1

function fiveAndGreaterOnly(arr) {
    return arr.filter( a => a > 4)
}

console.log("\n" + fiveAndGreaterOnly([3, 6, 8, 2]) + "\n"); /// [6, 8]

//Function 2

function evensOnly(arr) {
    return arr.filter( a => a%2 === 0)
}

console.log(evensOnly([3, 6, 8, 2]) + "\n"); /// [6, 8, 2]

//Function 3

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter( a => a.length < 6)
}

console.log(fiveCharactersOrFewerOnly(
    ["dog", "wolf", "by", "family", "eaten", "camping"]) + "\n")
     // ["by", "dog", "wolf", "eaten"]

//Functin 4

function peopleWhoBelongToTheIlluminati(arr) {
    return arr.filter(a => a.member)
}

console.log(peopleWhoBelongToTheIlluminati(
    [
        {
            name: "Angelina Jolie",
            member: true
        },
        {
            name: "Eric Jones",
            member: false
        },
        {
            name: "Paris Hilton",
            member: true
        },
        {
            name: "Kayne West",
            member: false
        },
        {
            name: "Bob Ziroll",
            member: true
        }
]));
console.log("\n")

//Function 5

function ofAge(arr){
    return arr.filter(a => a.age > 17)
}

console.log(ofAge([
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
console.log("\n");