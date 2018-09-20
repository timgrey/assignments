//1

let name = 'John'
const age = 101
const pets = ["cat", "dog"]

const petObjects = []

for (let i = 0; i < pets.length; i++){
  let pet = {type: pets[i]}
  let name = ''
  if (pets[i] === "cat"){
    name = "fluffy"
  } else {
    name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}

console.log(petObjects)


//2

const carrots = ["bright orange", "ripe", "rotten"]

const vegetables = carrots.map( carrot => ({type: "carrot", name: carrot}))

console.log(vegetables);


//3

const people = [
    {
        name: 'Princess Peach',
        friendly: false
    },
    {
        name: 'Luigi',
        friendly: true
    },
    {
        name: 'Mario',
        friendly: true
    },
    {
        name: 'Bowser',
        friendly: false
    }
]

let friends = people.filter( person => person.friendly)

console.log(friends);


//4

const doMathSum = (a, b) => a + b;
const produceProduct = (a, b) => a * b;

console.log(doMathSum(1,2))
console.log(produceProduct(3,4))