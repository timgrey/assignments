function add(a,b) {
    return a+b
}

function largest(a,b,c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

function evenOrOdd(num) {
    return num % 2 === 0 ? "even" : "odd";
}

function stringThing(str) {
    return str.length <= 20 ? str + str : str.slice(0,(str.length/2)-1);
}

//Quadratic

function quadratic(a,b,c) {
    var x = []
    x.push ( (-1 * b) + (Math.sqrt((b*b)-(4*a*c)))/(2*a) );
    x.push ( (-1 * b) - (Math.sqrt((b*b)-(4*a*c)))/(2*a) );
}

