var carSpotUser = [
    {
        name: "Tim Grey",
        age: 31,
        clubs: ["VW Vortex", "MoparUSA"],
        car: {  
            make : "Volkswagen",
            model: "Golf",
            trim: "R",
            engine : {  
                size: "2L",
                cylinderCount: 4,
                forcedInduction: { 
                    isIt: true,
                    type: "turbocharged",
                    model: "GTX3071R",
                }
            },
            color : "Nardo Grey",
            horsepower: 500,
            getCar: function () {
                return this.color + " " + this.make + " " + this.model + " " + this.trim
            }
        },
        friends: ["John Doe", "Kurt Spencer"]
    },{
        name: "Kurt Spencer",
        age: 32,
        clubs: ["VW Vortex", "Fiesta Club"],
        car: {  
            make : "Ford",
            model: "Fiesta",
            trim: "ST",
            engine : {  
                size: "1.6L",
                cylinderCount: 4,
                forcedInduction: { 
                    isIt: true,
                    type: "turbocharged",
                    model: "",
                }
            },
            color : "Blue",
            horsepower: 300,
            getCar: function () {
                return this.color + " " + this.make + " " + this.model + " " + this.trim
            }
        },
        friends: ["Tim Grey"]
    }
]

console.log(carSpotUser[0].name + " owns a " + carSpotUser[0].car.getCar())