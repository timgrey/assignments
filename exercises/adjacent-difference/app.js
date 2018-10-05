const combined = arr => {
    const output= {
        index:0,
        count:0
    }
    for (var i=1; i<arr.length-1; i++) {
        if ( arr[i-1].length + arr[i].length + arr[i+1].length > output.count ) {
            output.index = i
        }
    }
    return arr.slice(output.index - 1, output.index + 2)
}

console.log(combined(["this", "is", "an", "array", "blablabla"]))

exports.module = {
    comnbined:combined
}