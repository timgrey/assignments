function gameOfThrees(n, counter) {
    if (n === 1) {
        return counter
    } else if (n % 3 === 0) {
        n/=3
        counter++
        return gameOfThrees(n, counter)
    } else if ((n + 1) % 3 === 0) {
        n++
        return gameOfThrees(n, counter)
    } else {
        n--
        return gameOfThrees(n, counter)
    }
}

console.log(gameOfThrees(15, 0))