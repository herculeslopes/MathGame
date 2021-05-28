let lblQuestion = document.getElementById('lbl-question')
let inputLine = document.getElementById('entry-line')

document.addEventListener("keydown", recordKey)

let gameOn = false
let points = 0

function recordKey(e) {
    let value = Number(e.key)
        if (Number.isInteger(value) && inputLine !== document.activeElement) {
            inputLine.value += e.key
        } else if (e.key == "Enter") {
            enter()
        }    
}

function reset() {
    lblQuestion.innerText = `GAME OVER\nTotal de pontos: ${points}`
    points = 0
}

function perguntar() {
    gameOn = true
    n1 = Math.floor((Math.random() * 10) + 1);
    n2 = Math.floor((Math.random() * 10) + 1);
    question = `${n1} X ${n2} =`
    lblQuestion.innerText = `Qual é o valor de:\n${question}`
    res = n1 * n2
}

function clearInput() {
    inputLine.value = ""
}

function typeNum(num) {
    inputLine.value += num
}

function enter(){
    let value = inputLine.value
    inputLine.value = ""

    lblQuestion.style.color = "#46435F"

    if (gameOn) {

        if (value == res) {
            // let lblColor = lblQuestion.style.color
            points++
            lblQuestion.style.color = "green"
            lblQuestion.innerText = `ACERTOU!\nSeus pontos: ${points}`
            // lblQuestion.style.color = lblColor
            gameOn = false
        } else {
            lblQuestion.style.color = "red"
            lblQuestion.innerText = `ERROU!\nResposta correta: ${res}`
            gameOn = false
            reset()
        }

    } else {
        perguntar()

    }

}