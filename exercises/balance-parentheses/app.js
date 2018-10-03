console.time()
const parBalance = str => {
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            counter++
        } else {
            counter--
        }
        if (counter < 0) {
            return false
        }
    }
    if (counter === 0) {
        return true
    } else {
        return false
    }
}


module.exports = {
    parBalance: parBalance
}