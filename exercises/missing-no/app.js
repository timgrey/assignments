
function findMissingNo(arr) {
    let i = Math.min(...arr);
    while(arr.includes(i)) {
        i++
    }
    return i
  }

module.export = { 
    findMissingNo: findMissingNo
}