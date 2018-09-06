

function fizzBuzz() {
    var arr = []
    for (var i=1; i<=100; i++) {
        if (i%3 === 0 && i%5 === 0) {
            arr.push("fizzbuzz");
        } else if (i%3 === 0) {
            arr.push("fizz");
        } else if (i%5 === 0) {
            arr.push("buzz");
        } else {
            arr.push(i);
        }
    }
    return arr
}

console.log(fizzBuzz());

function fizzyBuzz() {
    var output = {
        fizzbuzz: 0,
        fizz: 0,
        buzz: 0
    }
    for (var i=1; i<=100; i++) {
        if (i%3 === 0 && i%5 === 0) output.fizzbuzz++
        else if (i%3 === 0) output.fizz++
        else if (i%5 === 0) output.buzz++
    }
    return output
}
console.log(fizzyBuzz())