function forWithinfor() {
    var output = []
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (var i=0; i<people.length; i++) {
        output.push(people[i]);
        for (var x=0; x<alphabet.length; x++) {
            output.push(alphabet[x].toUpperCase());
        }
    }
    return output
}

console.log(forWithinfor())