const multiplicationTable = () => {
    let output = []
    for (let i=1; i<=10; i++) {
        output.push([i]);
        for (let x=1; x<=10; x++) {
            output[i-1].push((i)*x)
        }
    }
    return output;
}

console.log(multiplicationTable());