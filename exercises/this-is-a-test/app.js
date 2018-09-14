function getLongest(arr) {
    longest = arr[0]
    for (var i = 1; i<arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}



module.exports = {
    getLongest: getLongest
}