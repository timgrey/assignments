var main = document.getElementById('main')
var button = document.querySelector('button')
var timer = document.getElementById('timer');
var time = 10
timer.innerHTML = time;
if (localStorage.counter === undefined) {
    var counter = 0
} else {
    counter = localStorage.counter;
    main.innerText = counter;
}

main.addEventListener("click", function(e) {
    e.preventDefault();
    counter++;
    time = 11;
    localStorage.counter = counter
    main.innerText = counter;
})

button.addEventListener("click", function(e) {
    e.preventDefault();
    counter = 0;
    localStorage.counter = counter
    main.innerText = counter;
})

var myVar = setInterval(countDown, 1000);

function countDown() {
    time -= 1;
    timer.innerHTML = time;
}
