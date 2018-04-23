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

function getPlayerCoord() {
    for (var y = 0; y < mapCurrent.length; y++) {
        for (var x = 0; x < mapCurrent[y].length; x++) {
            if (mapCurrent[y][x] == player) {
                return [y, x]
            }
        }
    }
}
var [playerY, playerX] = getPlayerCoord();
var pushX = 0;
var pushY = 0;
var nextX = 0;
var nextY = 0;


function movingThings(x, y) {
    nextX = playerX + x
    nextY = playerY + y
    pushX = playerX + (2 * x)
    pushY = playerY + (2 * y)
    let playerCurrent = mapCurrent[playerY][playerX];
    let playerNext = mapCurrent[nextY][nextX]
    let playerPush = mapCurrent[pushY][pushX]
    function stringSplitter(str) {
        str.split('')
    }
    var splitY = stringSplitter(mapCurrent[playerY])
    if (playerNext == space) {
        splitY.splice(playerCurrent, 1, space)
        splitY.splice(playerNext, 1, player)
        // playerCurrent = space
        // playerNext = player
    } else if ((playerNext == box) && (playerPush != box || wall)) {
        splitY.splice(playerCurrent, 1, space)
        splitY.splice(playerNext, 1, player)
        splitY.splice(playerPush, 1, box)
        // playerCurrent = space
        // playerNext = player
        // playerPush = box
    }
}

function reassignCoord(keyName) {

    // https://javascript.info/destructuring-assignment

    // let playerCurrent
    // let playerNext
    // let playerPush

    if (keyName == "ArrowDown") {
        movingThings(0, 1)
    } else if (keyName == "ArrowUp") {
        movingThings(0, -1)
    } else if (keyName == "ArrowRight") {
        movingThings(1, 0)
    } else if (keyName == "ArrowLeft") {
        movingThings(-1, 0)
    }

    // mapCurrent[playerY][playerX] = playerCurrent;
    // mapCurrent[nextY][nextX] = playerNext;
    // mapCurrent[pushY][pushX] = playerPush;
}

document.addEventListener("keydown", (event) => {

    createMap(reassignCoord(event.key));

    //     alert("You did it, wow, you won, great")
});

createMap();