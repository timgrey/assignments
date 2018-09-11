// Function 1

function getLargest(arr) {
    output = arr[0]
    for (var i=1; i<arr.length; i++) {
        if (output < arr[i]) {
            output = arr[i];
        }
    }
    return output;
}

// Function 2

function letterWithStrings(arr) {
    return arr.filter( string => string.match(/[a-z]/i))
}

// Function 3

function isDiv( a , b ) {
    return a%b === 0 ? true : false;
}

