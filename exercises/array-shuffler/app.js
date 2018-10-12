
function shuffle(arr, output){
    if (arr.length < 1) {return output};
    let i = Math.floor(Math.random() * arr.length);
    output.push(arr[i]);
    arr.splice(i, 1);
    shuffle(arr,output);
}

console.log(shuffle([1, 2, 3, 4, 5]),[])