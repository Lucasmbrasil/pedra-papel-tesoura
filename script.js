let pedra = document.getElementById('pedra');
let papel = document.getElementById('papel');
let tesoura = document.getElementById('tesoura');
let playerChoice = document.getElementById('escolha-jogador');
let computerChoice = document.getElementById('escolha-computador');
let playerImg = document.getElementById('img-jogador');
let computerImg = document.getElementById('img-computador');
let resultado = document.getElementById('resultado');
let pontuacaoJogador = document.getElementById('pontuacao-jogador');
let pontuacaoComputador = document.getElementById('pontuacao-computador');
let contadorJogador = 0
let contadorComputador = 0
let principal = document.getElementById('principal');
function contador() {
    pontuacaoJogador.innerHTML = contadorJogador
    pontuacaoComputador.innerHTML = contadorComputador
}


pedra.onclick = function () {
    playerImg.src = 'imgs/pedra.png'

    let computer = Math.floor(3 * Math.random())
    if (computer === 0) {
        computerImg.src = 'imgs/pedra.png'
        resultado.innerText = 'Empatou!'

    }
    if (computer === 1) {
        computerImg.src = 'imgs/papel.png'
        resultado.innerText = 'Você perdeu!'
        contadorComputador++
    }
    if (computer === 2) {
        computerImg.src = 'imgs/tesoura.png'
        resultado.innerText = 'Você ganhou!'
        contadorJogador++
    }
    contador()
}
papel.onclick = function () {
    playerImg.src = 'imgs/papel.png'
    let computer = Math.floor(3 * Math.random())
    if (computer === 1) {
        computerImg.src = 'imgs/papel.png'
        resultado.innerText = 'Empatou!'
    }
    if (computer === 2) {
        computerImg.src = 'imgs/tesoura.png'
        resultado.innerText = 'Você perdeu!'
        contadorComputador++
    }
    if (computer === 0) {
        computerImg.src = 'imgs/pedra.png'
        resultado.innerText = 'Você ganhou!'
        contadorJogador++
    }


    contador()
}

tesoura.onclick = function () {
    playerImg.src = 'imgs/tesoura.png'
    let computer = Math.floor(3 * Math.random())
    if (computer === 2) {
        computerImg.src = 'imgs/tesoura.png'
        resultado.innerText = 'Empatou!'
    }
    if (computer === 0) {
        computerImg.src = 'imgs/pedra.png'
        resultado.innerText = 'Você perdeu!'
        contadorComputador++
    }
    if (computer === 1) {
        computerImg.src = 'imgs/papel.png'
        resultado.innerText = 'Você ganhou!'
        contadorJogador++
    }
    contador()
}


