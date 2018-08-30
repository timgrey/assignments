var walls = {
    colors: ["brick", "white"],
    windows: 2,
    howManyWindows: function() {
        return "This Room has " + this.windows + " windows."
    }
}
var coffeeCup = {
    type: "Travel Mug",
    colors: ["black", "stainless steel"],
    isEmpty: false,
    contents: "Black Coffee",
    identify: function() {
        return "My " + this.type + " has " + this.contents + " in it."
    }
}
var computer = {
    color: "Space Grey",
    type: "laptop",
    brand: "MacBook",
    price: "$2000",
    write: function() {
        return "This " + this.color + " " + this.brand + " costs " + this.price + "." 
    }
}
var monitor = {
    color: "black",
    size: '24"',
    brand: "Asus",
    write: function() {
        return "My " + computer.type + " is plugged into a " + this.brand + " monitor."
    }
}
var building = {
    name: "Impact Hub",
    floorsCount: 5,
    school: "Vschool",
    write: function() {
        return "I go to " + this.school + " located at the " + this.name + "."
    }
}
var phone = {
    brand: "Samsung",
    model: "S9+",
    color: "Black",
    identify: function() {
        return "My phone is a " + this.color + " " + this.brand + " " + this.model + "."
    }
}
var instructor = {
    howOld: 30,
    sex: "Male",
    name: "Ben",
    who: function () {
        return "My instructer's name is " + this.name + "."
    }
}
var floor = {
    material: "wood",
    color: "weathered brown",
    type: function() {
        return "This room has " + this.color + " " + this.material + " floors." 
    }
}
var bag = {
    type: "messenger bag",
    material: "buffalo leather",
    color: "dark brown",
    identify: function() {
        return "My bag is a " + this.color + " " + this.material + " " + this.type + "."
    }
}
var table = {
    material: "wood and metal",
    howLong: "8ft",
    identify: function() {
        return "I am sitting at a " + this.howLong + " " + this.material + " table."
    }
}

console.log(walls.howManyWindows());
console.log(coffeeCup.identify());
console.log(computer.write());
console.log(monitor.write());
console.log(building.write());
console.log(phone.identify());
console.log(instructor.who());
console.log(floor.type());
console.log(bag.identify());
console.log(table.identify());