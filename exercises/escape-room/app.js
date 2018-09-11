var rs = require("readline-sync")

function drawRoom() {
    var room = ""
    for (var a = 1; a <= (maxY+4); a++) {
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
    console.log("\nYou can't move that way. There is a locked door\n")
    if (haveKey) {
        if (rs.keyInYN('\tDo you want to unlock it?')) {
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

function wall(holeX, holeY, myX, myY) {
    console.log("\nYou can't move that way. There is a wall in the way")
    if (holeX === myX && holeY === myY) {
        if (rs.keyInYN('\n\tBUT there is a hole in the wall. Do you want to feel inside?')) {
            console.log ("\n\t\tAn unkown creature rips your arm off and you bleed out on the floor. GG.")
            return false;
        } else {
            console.log ("\t\t\nGood choice. You never can be too careful in a dark room.")
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


var maxX = +Math.floor((Math.random() * 8) + 3) //highest X corrdinate possible of room
var maxY = +Math.floor((Math.random() * 3) + 3) //highest Y corrdinate possible of room

var myLocation = [ getFloorLocation(maxX), getFloorLocation(maxY) ] // x an y coordinates of your location
var holeLocation = getWallLocation(maxX, maxY) //[x, y] coordinates of hole location
var doorLocation = getWallLocation(maxX, maxY) //[x, y] coordinates of door location

var doorLocked = true;
var haveKey = false;

var holeX = holeLocation[0];
var holeY = holeLocation[1];
var doorX = doorLocation[0];
var doorY = doorLocation[1];
var keyX = +(getFloorLocation(maxX));
var keyY = +(getFloorLocation(maxY));
var myX = myLocation[0];
var myY = myLocation[1];

//changes key location if it is the same as spawn location
while (keyX === myX && keyY === myY) {
    keyX = getFloorLocation(maxX)
    keyY = getFloorLocation(maxY)
    console.log("moved key")
}

//moves door location if it is in the same location as hole in wall
while (holeX === doorX && holeY === doorY) {
    doorLocation = getWallLocation(maxX, maxY)
    doorX = +doorLocation[0]
    doorY = +doorLocation[1]
    console.log("moved door")
}

console.log("\n\t*******************************\n\t*** Welcome to Escape Room! ***\n\t*******************************\n")
console.log("\n\t\t You are in a room with locked door somewhere on the wall.\n ")
console.log("\tIn this room there is a key that you must find to unlock this hidden door.\n ")
console.log("\tAll you have with you is a strange map that shows you were you are in the room")
console.log("\n*********************************************************\n")

while (doorLocked) {
    console.log(drawRoom());
    var options = [ " Move Forwards ", " Move Backwards ", " Move Left  ", " Move Right "," Give Up "]
    var i = rs.keyInSelect(options, "Which direction would you like to move?");

    console.log("\n*********************************************************")

    if (i === 0) {
        if (1 < myY) {
            myY = myY - 1;
            console.log("\n ^ You moved forwards")
            console.log("\nMylocation: " + myX + "," + myY);
        } else if (doorX === myX && doorY === myY) {
            doorLocked = door(haveKey);
        } else {
            doorLocked = wall(holeX, holeY, myX, myY);
        }

    } else if (i === 1) {
        if (maxY > myY) {
            myY = myY + 1;
            console.log("\n !^ You moved backwards")
            console.log("\nMylocation: " + myX + "," + myY);
        } else if (doorX === myX && doorY === myY) {
            doorLocked = door(haveKey);
        } else {
            doorLocked = wall(holeX, holeY, myX, myY);
        }
        
    } else if (i === 2) {
        if (1 < myX) {
            myX = myX - 1;
            console.log("\n <<< You moved left")
            console.log("\nMylocation: " + myX + "," + myY);
        } else if (doorX === myX && doorY === myY) {
            doorLocked = door(haveKey)
        } else {
            doorLocked = wall(holeX, holeY, myX, myY)
        }

    } else if (i === 3) {
        if (maxX > myX) {
            myX = myX + 1;
            console.log("\nYou moved right >>>")
            console.log("\nMylocation: " + myX + "," + myY);
        } else if ((doorX === myX) && (doorY === myY)) {
            doorLocked = door(haveKey)
        } else {
            doorLocked = wall(holeX, holeY, myX, myY)
        }

    } else if (i === 4) {
        console.log("\n\n*** The building collapses on you. You die a painful death. ***\n\n")
        break;
    }

    if (myX === keyX && myY === keyY ) {
        if (haveKey === false) {
            console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>YOU FOUND A KEY ON THE FLOOR!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n")
            haveKey = true;
        }
    }

    if (!doorLocked) {
        break;
    }
}