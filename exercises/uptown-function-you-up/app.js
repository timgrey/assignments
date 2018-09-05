var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

//FUNCTION 1
function print(arr) {
    return arr.join(" ")
}
console.log("Print: " + print(lyrics));

//FUNCTION 2
function reverse(arr) {
    return arr.reverse().join(" ")
}
console.log("REVERSE: " + reverse(lyrics));

//FUNCTION 3
function everyOther(arr) {
    var x =[];
    arr.reverse();
    for(var i=0; i<arr.length; i++) {
        if (i%2 === 0) {
            x.push(arr[i]);
        }
    }
    return x.join(" ")
}
console.log("EVERY OTHER: " + everyOther(lyrics));

//FUNCTION 4
function everyTwo(arr) {
    var output = [];
    var y = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr.length-1 === i && y === 0) {
            output.push(arr[i]);
        } else if ( y === 0) {
            output.push(arr[i+1]);
            y+=1
        } else {
            output.push(arr[i-1]);
            y-=1
        }
    }
    return output.join(" ");
}
console.log("EVERY TWO: " + everyTwo(lyrics))

//FUNCTION 5
function random(arr) {
    var output =[];
    var length = arr.length
    for (var i=0; i<length ; i++) {
        var getRandom = Math.floor(Math.random() * arr.length);
        output.push(arr[getRandom]);
        arr.splice(getRandom, 1);
    }
    return output.join(' ');
}
console.log("RANDOM: " + random(lyrics));