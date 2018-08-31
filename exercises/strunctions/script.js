//1

function returnA(str) {
    str = str.slice('')
    newStr = []
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a") {
            newStr.push(str[i]);
        }
    }
    return newStr.join('');
}
console.log(returnA("blablablabla"))

//2

function alternatingCaps(str) {
	var arr = str.split("")
	for(var i=0; i < arr.length; i++) {
		if(i%2 === 0) {
			arr[i] = arr[i].toUpperCase()
		} else {
			arr[i] = arr[i].toLowerCase()
		}
	}
	return arr.join("")
}
console.log(alternatingCaps("Hello my name is tim"))

//3

function fullName(firstName,lastName) {
    return firstName.concat(" ", lastName);
}
console.log(fullName("Tim", "Grey"));

//4

function returnDigits(str) {
    return str.match(/[0-9]/g).join("")
}
console.log(returnDigits("Hi my phone number 208-267-6923"));

//5

function replaceSwithZ(str) {
    return str.replace(/s/gi, 'z');
}
console.log(replaceSwithZ("Hi my name is Tim and I like cars."))

//6

function indexOfStr(str, word) {
    return str.indexOf(word);
}
console.log(indexOfStr("Hi my name is Tim and I like cars", "Tim"))

//7

function indexOfStr(str, word) {
    return str.lastIndexOf(word);
}
console.log(indexOfStr("Hi my name is Tim. Tim likes cars", "Tim"))