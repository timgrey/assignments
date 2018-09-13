function countCode (str) {
    return str.match(/co\D{1}e/gi).length;
}

console.log(countCode("codecote"))

