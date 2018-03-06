let map = [
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

function createMap() {
    for (var i = 0; i < map.length; i++) {
        console.log('i;', i)
        console.log('Rows:', map[i])
        if (typeof map[i] == 'string') {
            var mapRow = map[i].split('')
        } else (mapRow = map[i])
        for (var v = 0; v < mapRow.length; v++) {
            var mapKey = mapRow[v]
            mapKey = document.createElement('div')
            if (mapRow[v] == 'S') {
                mapKey.id = mapRow[v]
            } else {
                mapKey.className = mapRow[v]
            }
            let destination = document.getElementById('map')
            destination.appendChild(mapKey)
        }
    }
    map[i] = mapRow
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
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] == "S") {
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
        console.log(map[nextX])
        if (map[nextY][nextX] == " ") {
            map[playerY][playerX] = " "
            map[nextY][nextX] = "S"
            boxtop = boxtop + 30
        } else if (map[nextY][nextX] == "B") {
            map[playerY][playerX] = " "
            map[nextY][nextX] = "S"
            map[pushY][pushX] = "B"
            boxtop = boxtop + 30
        }
    } else if (keyName == 'ArrowUp') {
        nextX = playerX
        nextY = playerY - 1
        pushX = playerX
        pushY = playerY - 2
        if (map[nextY][nextX] == " ") {
            map[playerY][playerX] = " "
            map[nextY][nextX] = "S"
            boxtop = boxtop - 30
        } else if (map[nextY][nextX] == "B") {
            map[playerY][playerX] = " "
            map[nextY][nextX] = "S"
            map[pushY][pushX] = "B"
            boxtop = boxtop - 30
        }
    } else if (keyName == 'ArrowRight') {
        nextX = playerX + 1
        nextY = playerY
        pushX = playerX + 2
        pushY = playerY
        if (map[nextY][nextX] == " ") {
            map[playerY][playerX] = " "
            map[nextY][nextX] = "S"
            boxleft = boxleft + 30
        } else if (map[nextY][nextX] == "B") {
            map[playerY][playerX] = " "
            map[nextY][nextX] = "S"
            map[pushY][pushX] = "B"
            boxleft = boxleft + 30
        }
    } else if (keyName == 'ArrowLeft') {
        nextX = playerX - 1
        nextY = playerY
        pushX = playerX - 2
        pushY = playerY
        if (map[nextY][nextX] == " ") {
            map[playerY][playerX] = " "
            map[nextY][nextX] = "S"
            boxleft = boxleft - 30
        } else if (map[nextY][nextX] == "B") {
            map[playerY][playerX] = " "
            map[nextY][nextX] = "S"
            map[pushY][pushX] = "B"
            boxleft = boxleft - 30
        }
    }
    document.getElementById("S").style.top = boxtop + "px";
    document.getElementById("S").style.left = boxleft + "px";
    createMap();
    // if (boxtop == -30 && boxleft == 600) {
    //     alert("You did it, wow, you won, great")
}
);
createMap();