var form = document.getElementById('form')

function print(output, id) {
    document.getElementById(id).innerHTML = output;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    var goomba = +this.goomba.value * 5;
    var bobomb = +this.bomb.value * 7;
    var cheepcheep = +this.cheep.value * 11
    var sum = goomba + bobomb + cheepcheep;
    print(sum, "output");
})