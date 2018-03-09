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

let mapCurrent = [...mapMaster];

var destination = document.getElementById('map')

function createMap() {
    while (destination.children.length) {
        destination.removeChild(destination.firstChild)
    }
    for (var i = 0; i < mapCurrent.length; i++) {
        var mapRow
        if (typeof mapCurrent[i] == 'string') {
            mapRow = mapCurrent[i].split('')
        } else { 
            mapRow = mapCurrent[i] 
        }

        for (var v = 0; v < mapRow.length; v++) {
            var mapKey = mapRow[v]
            mapKey = document.createElement('div')

            if (mapRow[v] == 'S') {
                mapKey.id = mapRow[v]
            } else {
                mapKey.className = mapRow[v]
            }
            destination.appendChild(mapKey)
        }
    };
}



let boxtop = 0;
let boxleft = 0;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    var pushX = 0;
    var pushY = 0;
    var nextX = 0;
    var nextY = 0;
    var playerX = 0;
    var playerY = 0;
    outer:
    for (let y = 0; y < mapCurrent.length; y++) {
        for (let x = 0; x < mapCurrent[y].length; x++) {
            if (mapCurrent[y][x] == "S") {
                playerX = x;
                playerY = y;
                break outer
            }
        }
    }
    if (keyName == 'ArrowDown') {
        nextX = playerX
        nextY = playerY + 1
        pushX = playerX
        pushY = playerY + 2
        console.log(mapCurrent[nextX])
        if (mapCurrent[nextY][nextX] == " ") {
            mapCurrent[playerY][playerX] = " "
            mapCurrent[nextY][nextX] = "S"
            boxtop = boxtop + 30
        } else if (mapCurrent[nextY][nextX] == "B") {
            mapCurrent[playerY][playerX] = " "
            mapCurrent[nextY][nextX] = "S"
            mapCurrent[pushY][pushX] = "B"
            boxtop = boxtop + 30
        }
    } else if (keyName == 'ArrowUp') {
        nextX = playerX
        nextY = playerY - 1
        pushX = playerX
        pushY = playerY - 2
        if (mapCurrent[nextY][nextX] == " ") {
            mapCurrent[playerY][playerX] = " "
            mapCurrent[nextY][nextX] = "S"
            boxtop = boxtop - 30
        } else if (mapCurrent[nextY][nextX] == "B") {
            mapCurrent[playerY][playerX] = " "
            mapCurrent[nextY][nextX] = "S"
            mapCurrent[pushY][pushX] = "B"
            boxtop = boxtop - 30
        }
    } else if (keyName == 'ArrowRight') {
        nextX = playerX + 1
        nextY = playerY
        pushX = playerX + 2
        pushY = playerY
        if (mapCurrent[nextY][nextX] == " ") {
            mapCurrent[playerY][playerX] = " "
            mapCurrent[nextY][nextX] = "S"
            boxleft = boxleft + 30
        } else if (mapCurrent[nextY][nextX] == "B") {
            mapCurrent[playerY][playerX] = " "
            mapCurrent[nextY][nextX] = "S"
            mapCurrent[pushY][pushX] = "B"
            boxleft = boxleft + 30
        }
    } else if (keyName == 'ArrowLeft') {
        nextX = playerX - 1
        nextY = playerY
        pushX = playerX - 2
        pushY = playerY
        if (mapCurrent[nextY][nextX] == " ") {
            mapCurrent[playerY][playerX] = " "
            mapCurrent[nextY][nextX] = "S"
            boxleft = boxleft - 30
        } else if (mapCurrent[nextY][nextX] == "B") {
            mapCurrent[playerY][playerX] = " "
            mapCurrent[nextY][nextX] = "S"
            mapCurrent[pushY][pushX] = "B"
            boxleft = boxleft - 30
        }
    }
    document.getElementById("S").style.top = boxtop + "px";
    document.getElementById("S").style.left = boxleft + "px";
    console.log(mapMaster)
    console.log(mapCurrent)

    createMap();
    // if (boxtop == -30 && boxleft == 600) {
    //     alert("You did it, wow, you won, great")
}
);
createMap();