const callback = (element) => {
    return element > 4
}
const every = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false
        }
    }
    return true
}

const some = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true
        }
    }
    return false
}

console.log(every([1,2,3,4,5],callback))
console.log(some([1,2,3,4,5],callback))