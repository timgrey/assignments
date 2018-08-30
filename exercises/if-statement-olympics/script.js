if (5 > 3) {
    console.log("is greater than")
}

if ( "cat".length === 3) {
    console.log("is the length")
}

if ( "cat" === "dog" ) {
    console.log("they are equal")
} else if ("cat" !== "dog") {
    console.log("they are not equal")
}

var person = {
    name: "Bobby",
    age: 12
}


//Bronze

if (person.age >= 12 && person.name[0] ==="B") {
    console.log( person.name + " is allowed to go to the movie.")
} else {
    console.log( person.name + " is not allowed to go to the movie.")
}


//Silver

if (1 === 1) {
    console.log("strict")
} else if (1 == "1") {
    console.log("loose")
} else {
    console.log("not equal at all")
}
if (3*4 > 10 && (5+10) > 10) {
    console.log("yes")
}

//Gold

if (typeof "dog" === "string") {
    console.log("yes")
} else {
    console.log("no")
}

if (typeof "true" === "boolean") {
    console.log("yes")
} else {
    console.log("no")
}

if (typeof var1 == "undefined") {
    console.log("variable has not been defined")
} else {
    console.log("variable has been defined")
}

if ("s" > 12) {
    console.log("S is greater then 12")
} else {
    console.log("S is NOT greater then 12")
}

10%2 === 0 ? console.log("even") : console.log("odd")