//Function 1

function leastToGreatest(arr) {
    return arr.sort( (a,b) => a > b )

}

console.log("\n" + leastToGreatest([1, 3, 5, 2, 90, 20])) // [1, 2, 3, 5, 20, 90] 

//Function 2

function greatestToLeast(arr) {
    return arr.sort( (a,b) => a < b )
}

console.log("\n" + greatestToLeast([1, 3, 5, 2, 90, 20])) // [90, 20, 5, 3, 2, 1] 

//Function 3

function lengthSort(arr) {
    return arr.sort( (a,b) => a.length > b.length )
}

console.log("\n" + lengthSort(["dog", "wolf", "by", "family", "eaten"])) // ["by", "dog", "wolf", "eaten", "family"] 

//Function 4

function alphabetical(arr) {
    return arr.sort( (a,b) => a.charCodeAt(0) > b.charCodeAt(0))
}

console.log("\n" + alphabetical(["dog", "wolf", "by", "family", "eaten"])) // ["by", "dog", "eaten", "family", "wolf"] 

//Function 5

function byAge(arr){
    return arr.sort( (a,b) => a.age > b.age)
}

console.log("\n")
console.log(byAge([
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]))
console.log("\n")
