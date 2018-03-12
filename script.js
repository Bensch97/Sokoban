const log = console.log

let mapMaster = [
    "  WWWWW ",
    "WWW   W ",
    "WOSB  W ",
    "WWW BOW ",
    "WOWWB W ",
    "W W O WW",
    "WB XBBOW",
    "W   O  W",
    "WWWWWWWW"
];

const space = " ";
const wall = "W";
const player = "S";
const box = "B";
const target = "O";
const occupiedTarget = "X";

let mapCurrent = [...mapMaster];

var destination = document.getElementById("map");

function createMap() {
    // if (destination.children.length) {
    //     destination.removeChild(destination.firstChild);
    // }
    log("curr", mapCurrent)
    log("master", mapMaster)
    for (var i = 0; i < mapCurrent.length; i++) {
        var mapRow;
        if (typeof mapCurrent[i] == "string") {
            mapRow = mapCurrent[i].split("");
        } else { 
            mapRow = mapCurrent[i];
        }

        for (var v = 0; v < mapRow.length; v++) {
            var mapKey = mapRow[v]
            mapKey = document.createElement("div")

            if (mapRow[v] == player) {
                mapKey.id = mapRow[v]
            } else {
                mapKey.className = mapRow[v]
            }
            destination.appendChild(mapKey)
        }
    };
}

function getPlayerCoord () {
    for (var y = 0; y < mapCurrent.length; y++) {
        for (var x = 0; x < mapCurrent[y].length; x++) {
            if (mapCurrent[y][x] == player) {
                return [ y, x ]
            }
        }
    }
}

function movinShit (x) {
    nextX = playerX
        nextY = playerY + x
        pushX = playerX
        pushY = playerY + (2 * x)
        playerNext = mapCurrent[nextY][nextX]
        playerPush = mapCurrent[pushY][pushX]
        if (playerNext == space) {
            playerCurrent = space
            playerNext = player
        } else if (playerNext == box) {
            playerCurrent = space
            playerNext = player
            playerPush = box
        }
}

function reassignCoord(keyName) {
    var pushX = 0;
    var pushY = 0;
    var nextX = 0;
    var nextY = 0;
    
    // https://javascript.info/destructuring-assignment
    let [ playerX, playerY ] = getPlayerCoord();

    let playerCurrent = mapCurrent[playerY][playerX];
    let playerNext
    let playerPush
    
    if (keyName == "ArrowDown") {
        movinShit(1)
    } else if (keyName == "ArrowUp") {
        movinShit(-1)
    } else if (keyName == "ArrowRight") {
        movinShit(1)
    } else if (keyName == "ArrowLeft") {
       movinShit(-1)
    }

    mapCurrent[playerY][playerX] = playerCurrent;
    mapCurrent[nextY][nextX] = playerNext; //not yet real code -- was playerNext
    mapCurrent[pushY][pushX] = playerPush;
}

document.addEventListener("keydown", (event) => {
    
    createMap( reassignCoord( event.key ) );
    
    //     alert("You did it, wow, you won, great")
});

createMap();