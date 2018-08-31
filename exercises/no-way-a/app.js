let removeA = function(str) {
    str = str.slice('')
    newStr = []
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== "a") {
            newStr.push(str[i]);
        }
    }
    return newStr.join('');
}
console.log(removeA("abc"));