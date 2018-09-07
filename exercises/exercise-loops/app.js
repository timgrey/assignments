//Function 1

function stringLetters(string) {
    for (var i=0; i<string.length; i++) {
        console.log(string[i])
    }
}
stringLetters(" Hello ");

//Function 2

function characterPosition(string, character) {
    var index = string.indexOf(character)
    if (index < 0) {
        return "Character Not Found"
    } else {
        return index
    }
}

console.log(characterPosition("hello", "o"));
console.log(characterPosition("hello", "x"));

//Function 3

function fortyTwo(array) {
    for (var i=0; i<array.length; i++) {
        if (array[i] === 42) {
            return "42 Has been found"
        } else if (array.length - 1 === i) {
            return "42 Has NOT been found"
        }
    }
}

console.log(fortyTwo([2,3,4,5,6,4,3,3,42]))
console.log(fortyTwo([2,3,4,5,6,4,3,3,3]))

//Function 4

function smallestNum(array) {
    var min = array[0]
    for (var i=1; i<array.length; i++) {
        if (min > array[i]) {
            min = array[i]
        }
    }
    return min
}

console.log(smallestNum([2,5,4,78,3,1,3,4,3]));