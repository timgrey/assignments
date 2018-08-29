var shopper = {
    firstName : "Tim",
    lastName : "Grey",
    age: 31,
    emptyCart: false,
    groceryCart: ["Milk", "Eggs", "Bread', 'Apples"],
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

console.log("Hi my name is " + shopper.fullName() + " and I have " + shopper.groceryCart.length + " items in my cart.")