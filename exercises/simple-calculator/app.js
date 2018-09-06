var form1 = document.getElementById('form1')
var form2 = document.getElementById('form2')
var form3 = document.getElementById('form3')

function print(output, id) {
    document.getElementById(id).innerHTML = output;
}

form1.addEventListener("submit", function(event) {
    event.preventDefault();
    var sum = +this.firstNumber.value + +this.secondNumber.value;
    print(sum, "sum");
})
form2.addEventListener("submit", function(event) {
    event.preventDefault();
    var difference = +this.firstNumber.value - +this.secondNumber.value;
    print(difference, "difference");
})
form3.addEventListener("submit", function(event) {
    event.preventDefault();
    var product = +this.firstNumber.value * +this.secondNumber.value;
    print(product, "product");
})