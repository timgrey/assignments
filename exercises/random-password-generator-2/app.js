function randomPasswordGenerator(number) {
    var password = '';
    for (var i=0; i<number; i++) {
        password += String.fromCharCode(Math.floor(Math.random() * 93) + 33);
    }
    return password;
}

console.log(randomPasswordGenerator(10));