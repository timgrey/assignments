var rs = require("readline-sync")




//FUNCTIONS

function monster() {
    this.attack = (Math.floor((Math.random() * 39) + 10)),
    this.health = (Math.floor((Math.random() * 51) + 50))
}

function getEnemyName() {
    var x = Math.floor((Math.random() * 3) + 1)
    if (x === 1) {
        return "Ogre"
    } else if (x === 2) {
        return "Cyclops"
    } else {
        return "Dark Elf"
    }
}

function drawRoom() {
    var room = ""
    for (var a = 1; a <= (maxY*2)+1; a++) {
    room += "\n\t"
        for (var z = 1; z < (maxX+2); z++) {
            if (a%2 !== 0 && z === maxX) {
                room += "-"
                z++
            }
            if (a%2 !== 0) {
                room += "--"
            } else if (z === 1) {
                room += "|"
            } else if (z === myX+1 && a === myY*2) {
                room += "X|"
            } else {
                room += " |"
            }
        }
    }
    room += "\n"
    return room;
}

function door(haveKey) {
    console.log("\n\n\n\n\n\n\nYou can't move that way. There is a locked door\n\n\n")
    if (haveKey) {
        if (rs.keyInYN('\t\n\nDo you want to unlock it?')) {
            console.log("\n\t\tCONGRATS YOU ESCAPED!!!\n")
            return false;
        } else { 
            console.log("\n\t\tOk, suit yourself.")
            return true;
        }
    } else {
        return true;
    }
}

function getWallLocation(x, y) {
    var LocationX = 0
    var LocationY = 0
    //Finds Which Axis the wall is Located on
    xORy = Math.floor((Math.random() * 2) + 1) 
    
    //Finds where on that Axis the Oject is Located
    if (xORy === 1) {
        LocationX = Math.floor((Math.random() * x) + 1)
    } else {
        LocationY = Math.floor((Math.random() * y) + 1)
    }

    //Finds which side of the room that wall is located on based on which axis
    whichSide = Math.floor((Math.random() * 2) + 1)
    if (xORy === 1 &&  whichSide === 1) {
        LocationY = 1
    } else if (xORy === 1 &&  whichSide === 2) {
        LocationY = y
    } else if (xORy === 2 &&  whichSide === 1) {
        LocationX = 1
    } else {
        LocationX = x
    } 

    //Returns the array [x,y] with coordinates of wall.
    return [+LocationX, +LocationY]
}


function getFloorLocation (num) {
    return +(Math.floor((Math.random() * num) + 1))
}

function fightSequence() {
    var rollDice = Math.random() < 0.25;
    if (rollDice) {
        var enemy = new monster();
        enemy.name = getEnemyName()
        console.log("\nA WILD " + enemy.name + " APPEARED!\n\n")

        while (enemy.health > 0) {
            console.log(`\nYour Health Is At ${+my.stats.health}/${my.inventory.shield ? 115 : 100} Hit Points\n`)
            var options = [ " Fight", " Run", " Use Potion ", " Succumb"]
            var i = rs.keyInSelect(options, "What would you like to do?");
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
//FIGHT
            if ( i === 0) {
                if (Math.random() < 0.25) {
                    console.log("\nYou attacked the " + enemy.name + " and MISSED\n")
                } else {
                    console.log("\nYou attacked the " + enemy.name + " doing " + my.stats.attack + " damage!\n")
                    enemy.health -= +my.stats.attack
                    if ( enemy.health > 0) {
                        console.log("The " + enemy.name + " is down to " + enemy.health + " hit points!\n")
                    } else {
                        break;
                    }
                }
                if (Math.random() > 0.25) {
                    console.log("The " + enemy.name + " attacked you doing " + enemy.attack + " damage!\n")
                    my.stats.health -= +enemy.attack
                    if ( my.stats.health <= 0) {
                        break;
                    }
                } else {
                    console.log("The " + enemy.name + " attacked you and MISSED!\n")
                }
            }

//RUN            
            else if ( i === 1) {
                if (Math.random() < 0.5) {
                    console.log("\nYou got away!\n")
                    break;
                } else {
                    console.log("\nYou failed to get away!\n")
                    if (Math.random() > 0.25) {
                        console.log("The " + enemy.name + " attacked you doing " + enemy.attack + " damage!\n")
                        my.stats.health -= +enemy.attack
                        if (my.stats.health <= 0) {
                            break;
                        }
                    } else {
                        console.log("The " + enemy.name + " attacked you and missed!\n")
                    }
                }
            } 
  
//USE POTION
            else if ( i === 2) {
                if (my.inventory.healthPotions > 0) {
                    console.log( "\n<3 You Used A Health Potion! You now have full health! <3\n")
                    my.inventory.healthPotions -= 1;
                    if (my.inventory.shield) {
                        my.stats.health = 115
                    } else {
                        my.stats.health = 100
                    }
                } else if (my.inventory.healthPotions === 0) {
                    console.log("\nYou dont have any potions left\n")
                }
            }

//SUCCUMB
            else if ( i === 3) {
                my.stats.health = 0
                break;
            }
        }

//ENEMY DIES
        if (enemy.health <= 0) {
            console.log("You defeated the " + enemy.name + "!")
            if (Math.random() < 0.5) {
                console.log("\nHe dropped a potion!")
                my.inventory.healthPotions++
            }
            if (Math.random() < 0.25 && !my.inventory.sword) {
                my.inventory.sword = true;
                my.stats.attack += 15
                console.log("He dropped a sword! You now have +15 attack!")
            }
            if (Math.random() < 0.25 && !my.inventory.key) {
                console.log("He dropped a key!")
                my.inventory.key = true;
            }
            if (Math.random() < 0.25 && !my.inventory.shield) {
                my.inventory.shield = true;
                my.stats.health += 15
                console.log("\nHe dropped a shield! You now have +15 health!")
            }
        }
    } else {
        return
    }
}









//VARIABLES

var maxX = +Math.floor((Math.random() * 2) + 3) //highest X corrdinate possible of room
var maxY = +Math.floor((Math.random() * 2) + 3) //highest Y corrdinate possible of room

var myLocation = [ getFloorLocation(maxX), getFloorLocation(maxY) ] // x an y coordinates of your location
var doorLocation = getWallLocation(maxX, maxY) //[x, y] coordinates of door location

var doorLocked = true;
var doorX = doorLocation[0];
var doorY = doorLocation[1];
var myX = myLocation[0];
var myY = myLocation[1];

var my = {

    stats: {health:100,
            attack: +(Math.floor((Math.random() * 11) + 20))
    },

    inventory: {
        key: false,
        sword: false,
        shield: false,
        healthPotions: 2
    }
}




//MAIN PROGRAM

console.log("\n\t\t\t   *******************************\n\t\t\t   *** Welcome to Escape Room! ***\n\t\t\t   *******************************\n")
console.log("\n\t\t You are in a room with locked door somewhere on the wall.\n ")
console.log("\tYou must fight the monsters that haunt this room to find the key!!!!\n ")
console.log("\tAll you have with you is a strange map that shows you were you are in the room\n")
console.log("\tThe room is not very well lit, so you must feel the walls to find the door")
console.log("\n*********************************************************************************************\n")

var userName = rs.question('May I have your name? ');
console.log(`\nHello ${userName}, prepare to die!\n`)
let sgo = ['continue'];
var x = rs.keyInSelect(sgo, "Press 1 to continue...");
console.log("\n\n\n\n\n\n\n\n")

while (doorLocked) {
    console.log(drawRoom());
    var options = [ " Move Forwards ", " Move Backwards", " Move Left", " Move Right"," Give Up", " Check Inventory"," Check Stats"]
    var i = rs.keyInSelect(options, "Which direction would you like to move?");

    console.clear();

    if (i === 0) {
        if (1 < myY) {
            myY = myY - 1;
            console.log("\n\n\n\n\n\n ^ You moved forwards\n\n")
            console.log("\nMylocation: " + myX + "," + myY);
            fightSequence();
        } else if (doorX === myX && doorY === myY) {
            doorLocked = door(my.inventory.key);
        } else {
            console.log("\n\n\n\n\n\n\nYou can't move that way. There is a wall in the way\n\n")
        }

    } else if (i === 1) {
        if (maxY > myY) {
            myY = myY + 1;
            console.log("\n\n\n\n\n\n !^ You moved backwards\n\n")
            console.log("\nMylocation: " + myX + "," + myY);
            fightSequence();
        } else if (doorX === myX && doorY === myY) {
            doorLocked = door(my.inventory.key);
        } else {
            console.log("\n\n\n\n\n\n\nYou can't move that way. There is a wall in the way\n\n")
        }
        
    } else if (i === 2) {
        if (1 < myX) {
            myX = myX - 1;
            console.log("\n\n\n\n\n\n <<< You moved left\n\n")
            console.log("\nMylocation: " + myX + "," + myY);
            fightSequence();
        } else if (doorX === myX && doorY === myY) {
            doorLocked = door(my.inventory.key)
        } else {
            console.log("\n\n\n\n\n\n\nYou can't move that way. There is a wall in the way\n\n")
        }

    } else if (i === 3) {
        if (maxX > myX) {
            myX = myX + 1;
            console.log("\n\n\n\n\n\nYou moved right >>>\n\n")
            console.log("\nMylocation: " + myX + "," + myY);
            fightSequence();
        } else if ((doorX === myX) && (doorY === myY)) {
            doorLocked = door(my.inventory.key)
        } else {
            console.log("\n\n\n\n\n\n\nYou can't move that way. There is a wall in the way\n\n")
        }

    } else if (i === 4) {
        console.log("\n\n*** The building collapses on you. You die a painful death. ***\n\n")
        break;

    } else if (i===5) {
        console.log('YOUR INVENTORY:')
        console.log(`Key: ${my.inventory.key ? "Yes":"No"} | Sword: ${my.inventory.sword ? "Yes":"No"} | Shield: ${my.inventory.shield ? "Yes":"No"} | Health Potions: ${my.inventory.healthPotions}`)
    
    } else if (i===6) {
        console.log(my.stats)
    }

    if (!doorLocked) {
        break;
    }

    if (my.stats.health <=0) {
        console.log("\nYou Died!!!!!!!!!!!!!!!!!")
        break;
    }
}