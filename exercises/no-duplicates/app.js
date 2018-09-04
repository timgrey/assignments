function noDuplicates(str) {
    var record = {};
    var output = "";

    //looped through string
    for(var i=0; i<str.length; i++) {
        //get current letter
        var currentLetter = str[i];
        //check if letter is in the record obj
        if (record[currentLetter] === undefined) {
            //add to registery if not encountered
            record[currentLetter] = true
        } else {
            output += currentLetter;
        }
    }
    return output;  
};

console.log(noDuplicates("helloooo"))

function noDuplicates2(str) {
    var record = {};
    var output = "";

    //looped through string
    for(var i=0; i<str.length; i++) {
        //get current letter
        var currentLetter = str[i];
        //check if letter is in the record obj
        if (record[currentLetter] === undefined) {
            //add to registery if not encountered
            output += currentLetter;
            record[currentLetter] = true
        }
    }
    return output;  
};

console.log(noDuplicates2("helloooo"))