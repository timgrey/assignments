const twoSum = (arr, sum) => {
    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] + arr[x] === sum) return [i, x]
        }
    }
}


console.log(twoSum([1,2,3,4,5,6,7], 10))