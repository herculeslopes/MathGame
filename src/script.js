let lblQuestion = document.getElementById('lbl-question')
let inputLine = document.getElementById('entry-line')

let gameOn = false

function perguntar() {
    gameOn = true
    n1 = Math.floor((Math.random() * 10) + 1);
    n2 = Math.floor((Math.random() * 10) + 1);
    question = `${n1} X ${n2} =`
    lblQuestion.innerText = `Qual é o valor de:\n${question}`
    res = n1 * n2
}

function typeNum(num) {
    inputLine.value += num
}

function enter(){
    let value = inputLine.value

    lblQuestion.style.color = "#46435F"

    if (gameOn) {

        if (value == res) {
            // let lblColor = lblQuestion.style.color
            lblQuestion.style.color = "green"
            lblQuestion.textContent = "ACERTOU!"
            // lblQuestion.style.color = lblColor
            gameOn = false
        } else {
            lblQuestion.style.color = "red"
            lblQuestion.textContent = "ERROU!"
            gameOn = false
        }

    } else {
        perguntar()

    }

}