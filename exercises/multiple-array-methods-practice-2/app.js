console.clear();
const arr = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
];

const getPetNames = (arr) => {
    let output = [];
    for (var i = 0; i < arr.length; i++) {
        for (var x = 0; x < arr[i].pets.length; x++) {
            output.push(arr[i].pets[x].name)
        }
    }
    return output;
}
console.log(getPetNames(arr))

const olderThen20 = (arr) => {
    let output = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].age > 20) {
            for (var x = 0; x < arr[i].pets.length; x++) {
                output.push(arr[i].pets[x].name)
            }
        }
    }
    return output;
}

console.log(olderThen20(arr))

const haveNickNames = (arr) => {
    let output = [];
    for (var i = 0; i < arr.length; i++) {
        for (var x = 0; x < arr[i].pets.length; x++) {
            if (arr[i].pets[x].nickNames.length) {
                output.push(arr[i].pets[x].name)
            }
        }
    }
    return output;
}
console.log(haveNickNames(arr))

const sortDogOwners = arr => {
    arr.sort((a, b) => a.age - b.age)
    return arr.filter(a => {
        for (var i=0; i<a.pets.length; i++) {
            if ( a.pets[i].type === "dog") {
                return true;
            }
        }
    })
}

console.log(sortDogOwners(arr))