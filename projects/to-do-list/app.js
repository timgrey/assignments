var ul = document.querySelector("ul");

var url = "https://api.vschool.io/timgrey/todo/";
var form = document.querySelector("form");

//getRequest is a PROMISE
var getRequest = axios.get(url)
getRequest.then(function (response) {
    var todos = response.data;
    todos.forEach(displayTodo);
})
    .catch(function (err) {
        console.log(err);
    })

function displayTodo(todo) {
    var li = document.createElement("li");
    li.innerText = todo.title;

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.id = todo._id;
    deleteBtn.addEventListener("click", handleDelete);

    var completedForm = document.createElement("form");
    completedForm.innerText = "Completed: ";
    var input = document.createElement("input");
    input.type = "checkbox";
    input.id = todo._id;
    input.checked = todo.completed;
    input.addEventListener("input", handleComplete)

    ul.appendChild(li);
    li.appendChild(deleteBtn);
    li.appendChild(completedForm);
    completedForm.appendChild(input);
}

function handleComplete(e) {
    var input = this;
    var putRequest = axios.put(url + input.id, { completed: input.checked })
        .catch(function (err) {
            console.log(err);
        })
}

function handleDelete(e) {
    var deleteBtn = this;
    var deleteRequest = axios.delete(url + deleteBtn.id);
    deleteRequest.then(function (response) {
        ul.removeChild(deleteBtn.parentNode);
    })
        .catch(function (err) {
            console.log(err);
        })
}

form.addEventListener("submit", handleNewTodo)

function handleNewTodo(e) {
    e.preventDefault();
    var todo = {
        title: this.title.value,
    }
    var postRequest = axios.post(url, todo);
    postRequest.then(function (response) {
        var receivedTodo = response.data;
        displayTodo(receivedTodo);
    })
        .catch(function (err) {
            console.log(err);
        })
}