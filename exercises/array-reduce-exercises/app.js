function total(arr) {
   return arr.reduce((a , b) => a+b);
}

console.log(total([1,2,3]))

//Function 2

function stringConcat(arr) {
    return arr.reduce((a , b) => a.toString() + b.toString());
}

console.log(stringConcat([1,2,3]))

//Function 3

function totalVotes(arr) {
    return arr.reduce( function(a,b) {
        if (b.voted) {
            return a + 1
        } else {
            return a
        }
    },0)
}

console.log(totalVotes( [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age: 55, voted: true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]));

//Function 4

function shoppingSpree(arr) {
    return arr.reduce(function(a,b) {
        return a + +b.price;
    },0)
    
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist));

// Function 5

function flatten(arr) {
    return arr.reduce(function(a,b) {
        for(var i=0; i<b.length; i++) {
            a.push(b[i])
        } 
        return a
    },[])
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays));

// Function 6

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce(function(a,b){
        if (b.age > 17 && b.age < 26) {
            a.youth++
            if (b.voted) {
                a.youngVotes++
            }
        }
        if (b.age > 25 && b.age < 36) {
            a.mids++
            if (b.voted) {
                a.midVotes++
            }
        }
        if (b.age > 35 && b.age < 56) {
            a.olds++
            if (b.voted) {
                a.oldVotes++
            }
        }
        return a;

    },{ youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0
      })
}

console.log(voterResults(voters));