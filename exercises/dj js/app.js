var square = document.getElementById("square")

square.addEventListener('mouseover', function(){
    square.style.backgroundColor = 'blue'
});
square.addEventListener('mouseleave', function(){
    square.style.backgroundColor = 'lightgrey'
});
square.addEventListener('mousedown', function(){
    square.style.backgroundColor = 'red'
});
square.addEventListener('mouseup', function(){
    square.style.backgroundColor = 'yellow'
});
square.addEventListener('dblclick', function(){
    square.style.backgroundColor = 'green'
});
window.addEventListener('wheel', function(){
    square.style.backgroundColor = 'orange'
});
window.addEventListener('keydown', function(e) {
    if (e.key === "r") {
        square.style.backgroundColor = 'red' 
    } else if (e.key === "g") {
        square.style.backgroundColor = 'green'
    } else if (e.key === "b") {
        square.style.backgroundColor = 'blue'
    } else if (e.key === "o") {
        square.style.backgroundColor = 'orange'
    } else if (e.key === "y") {
        square.style.backgroundColor = 'yellow'
    }
});