var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

fruit.shift();
console.log("fruit: ", fruit);

vegetables.pop();
console.log("vegetables: ", vegetables);

fruit.push(fruit.indexOf("orange"));
console.log("fruit: ", fruit);

console.log(vegetables.length)

vegetables.push(vegetables.length)
console.log("vegetables: ", vegetables);

food = fruit.concat(vegetables);
console.log("food: " + food);

food.splice(4,2)
console.log("food: " + food);

food = food.reverse();
console.log("food: " + food);