var form = document.querySelector("form");
var output = document.getElementById("output")


form.addEventListener("submit", function(e){

    e.preventDefault();

    var newItem = {
        title: this.title.value,
        description: this.description.value,
        price: this.price.value
    }

    addItem(newItem)

    form.reset();
})

function addItem(newItem) {

    var item = document.createElement("div");
    item.classList.add("item")

    var title =  document.createElement("h3");
    title.innerHTML = "<br>" + newItem.title;

    var description = document.createElement("p");
    description.innerText = newItem.description;

    var price = document.createElement("p");
    price.innerText = "Price: $" + newItem.price;

    var label = document.createElement("label");
    label.innerText = "Completed:";

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox"
    checkbox.addEventListener("input", function(e) {
        title.classList.toggle("completed")
        label.classList.toggle("completed")
        price.classList.toggle("completed")
        description.classList.toggle("completed")
    })
    
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", function(e) {
        output.removeChild(this.parentElement)
    })

    children = [deleteButton,title,label,checkbox,price,description]
    children.forEach( x => item.appendChild(x))
    output.appendChild(item);
}