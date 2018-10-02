const checkType = arr => {
    return [].concat(...arr).every(i => typeof i === typeof arr[0][0]);

}
   
console.log(checkType([true, false], [true, false]))