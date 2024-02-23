let score = 0
let timer = 5000
let life = 5

function randoms() {
    points = document.getElementById("score").innerHTML = score
    let ran = ["+", "-", "X"]
    let operators = Math.floor(Math.random() * ran.length)
    let operator = ran[operators]
    let num1 = Math.floor(Math.random() * 10)
    let num2 = Math.floor(Math.random() * 10)
    let int1 = document.getElementById("pip1").innerHTML = num1
    let oper = document.getElementById("plus").innerHTML = operator
    let int2 = document.getElementById("pip2").innerHTML = num2
    document.getElementById("Pin").onclick = function () {
        val = document.getElementById("text").value
        click(ran, num1, operator, num2, val, points)
    }
}

function click(ran, num1, operator, num2, val, points) {
    if (operator == ran[0]) {
        let int1 = document.getElementById("pip1").innerHTML = num1
        let oper = document.getElementById("plus").innerHTML = operator
        let int2 = document.getElementById("pip2").innerHTML = num2
        let vv = int1 + int2
        if (val == vv) {
            score += 1
            document.getElementById("feed").innerHTML = "Good"
            clearTimeout(vv)
            clearInterval(vvs)
            vv = setTimeout(randoms, 100)
            vvs = setInterval(randoms, timer)
        }
        else if (val == "") {
            document.getElementById("feed").innerHTML = "Enter something"
        }
        else {
            document.getElementById("feed").innerHTML = "Not Good"
            life -= 1
            document.getElementById("life").innerHTML = `Life ` + life

        }
        document.getElementById("ans").innerHTML = vv
    }
    if (operator == ran[1]) {
        let int1 = document.getElementById("pip1").innerHTML = num1
        let oper = document.getElementById("plus").innerHTML = operator
        let int2 = document.getElementById("pip2").innerHTML = num2
        let vv = int1 - int2
        if (val == vv) {
            score += 1
            document.getElementById("feed").innerHTML = "Good"
            clearTimeout(vv)
            clearInterval(vvs)
            vv = setTimeout(randoms, 100)
            vvs = setInterval(randoms, timer)

        }
        else {
            document.getElementById("feed").innerHTML = "Not Good"
            life -= 1
            document.getElementById("life").innerHTML = `Life ` + life
        }
        document.getElementById("ans").innerHTML = vv

    }
    if (operator == ran[2]) {
        let int1 = document.getElementById("pip1").innerHTML = num1
        let oper = document.getElementById("plus").innerHTML = operator
        let int2 = document.getElementById("pip2").innerHTML = num2
        let vv = int1 * int2
        if (val == vv) {
            score += 1
            document.getElementById("feed").innerHTML = "Good"
            clearTimeout(vv)
            clearInterval(vvs)
            vv = setTimeout(randoms, 100)
            vvs = setInterval(randoms, timer)
        }
        else {
            document.getElementById("feed").innerHTML = "Not Good"
            life -= 1
            document.getElementById("life").innerHTML = `Life ` + life

        }
        document.getElementById("ans").innerHTML = vv

    }
}
document.getElementById("powr").onclick = function () {
    clearTimeout(vv)
    clearInterval(vvs)
    vv = setTimeout(randoms, timer * 100)
    vvs = setInterval(randoms, timer * 100)
}
vv = setTimeout(randoms, 100)
vvs = setInterval(randoms, timer)

function one() {
    val = document.getElementById("text").value += 1
}
function two() {
    val = document.getElementById("text").value += 2
}
function three() {
    val = document.getElementById("text").value += 3
}
function four() {
    val = document.getElementById("text").value += 4
}
function five() {
    val = document.getElementById("text").value += 5
}
function six() {
    val = document.getElementById("text").value += 6
}
function seven() {
    val = document.getElementById("text").value += 7
}
function eight() {
    val = document.getElementById("text").value += 8
}
function nine() {
    val = document.getElementById("text").value += 9
}
function zero() {
    val = document.getElementById("text").value += 0
}
function zero() {
    val = document.getElementById("text").value += 0
}
