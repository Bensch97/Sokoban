let map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "WBBBWBBBBBWBBBBBWBWBW",
    "WBWBWBWWWBWWWWWBWBWBW",
    "WBWBWBBBWBBBBBWBWBBBW",
    "WBWWWWWWWBWBWWWBWBWBW",
    "WBBBBBBBBBWBBBBBWBWBW",
    "WBWWWBWWWWWBWWWWWBWBW",
    "WBWBBBWBBBWBWBBBBBWBW",
    "WBWWWWWBWBWBWBWWWBWBF",
    "SBBBBBWBWBWBWBWBWBWWW",
    "WWWWWBWBWBWBWBWBWBWBW",
    "WBBBBBWBWBWBBBWBWBWBW",
    "WBWWWWWWWBWWWWWBWBWBW",
    "WBBBBBBBWBBBBBBBWBBBW",
    "WWWWWWWWWWWWWWWWWWWWW"
];

function createMap() {
    for (let i = 0; i < map.length; i++) {
        let mapRow = map[i].split('')
        for (let v = 0; v < mapRow.length; v++) {
            let mapKey = mapRow[v]
            mapKey = document.createElement('div')
            if (mapRow[v] == 'S') {
                mapKey.id = mapRow[v]
            } else {
                mapKey.className = mapRow[v]
            }
            let destination = document.getElementById('map')
            destination.appendChild(mapKey)
        }
        map[i] = mapRow
    }
}

let boxtop = 0;
let boxleft = 0;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    let nextX = 0;
    let nextY = 0;
    let playerX = 0;
    let playerY = 0;
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
        console.log(map[nextX])
        if (map[nextY][nextX] == "B" || map[nextY][nextX] == "F") {
            map[playerY][playerX] = "B"
            map[nextY][nextX] = "S"
            boxtop = boxtop + 30
        }
    } else if (keyName == 'ArrowUp') {
        nextX = playerX
        nextY = playerY - 1
        if (map[nextY][nextX] == "B" || map[nextY][nextX] == "F") {
            map[playerY][playerX] = "B"
            map[nextY][nextX] = "S"
            boxtop = boxtop - 30
        }
    } else if (keyName == 'ArrowRight') {
        nextX = playerX + 1
        nextY = playerY
        if (map[nextY][nextX] == "B" || map[nextY][nextX] == "F") {
            map[playerY][playerX] = "B"
            map[nextY][nextX] = "S"
        boxleft = boxleft + 30
        }
    } else if (keyName == 'ArrowLeft') {
        nextX = playerX - 1
        nextY = playerY 
        if (map[nextY][nextX] == "B" || map[nextY][nextX] == "F") {
            map[playerY][playerX] = "B"
            map[nextY][nextX] = "S"
        boxleft = boxleft - 30
        }
    }
    document.getElementById("S").style.top = boxtop + "px";
    document.getElementById("S").style.left = boxleft + "px";
});

createMap();