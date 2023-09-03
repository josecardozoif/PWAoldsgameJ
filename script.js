window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js")
    }
} 
    { document.getElementById('jogo').style.visibility = 'hidden' };

function Jogador(nome, forma) {
    this.nome = nome;
    this.forma = forma;
}

var jogador1, jogador2;

var jogadorAtual
var formas = ['X', '0'];
var index = null;

var tabuleiro = new Array(9);

iniciarJogo = () => {
    var nomeJogador1 = document.getElementById('jogador1').value;
    var nomeJogador2 = document.getElementById('jogador2').value;
    jogador1 = new Jogador(nomeJogador1, 0);
    jogador2 = new Jogador(nomeJogador2, 1);

    jogadorAtual = jogador1;
    setJogadorAtual();

    document.getElementById('jogo').style.visibility = 'visible';
}

reset = () => { window.location.reload(); }

setJogadorAtual = () => {
    document.getElementById('jogadorAtual').innerHTML = 'Jogador Atual: ' + jogadorAtual.nome;
}

setVitoria1 = () => {
    document.getElementById('resultado').innerHTML = jogador1.nome + ' Venceu!';
}

setVitoria2 = () => {
    document.getElementById('resultado').innerHTML = jogador2.nome + ' Venceu!';
}

setEmpate = () => {
    document.getElementById('resultado').innerHTML = 'Empate. Tente Novamente.';
}

tabuleiroCheio = () => {
    var preenchidos = 0;
    for(var i = 0; i < tabuleiro.length; i++)
        if(tabuleiro[i] != undefined)
    preenchidos++;
    preenchidos.length == tabuleiro.length;
}

naHorizontal = () => {
    for(var i = 0; i < 7; i += 3){
        if(tabuleiro[i] == 'X' && tabuleiro[i + 1] == 'X' && tabuleiro[i + 2] == 'X'){
            setVitoria1();
            reset();
        }
        if (tabuleiro[i] == 'O' && tabuleiro[i + 1] == 'O' && tabuleiro[i + 2] == 'O'){
            setVitoria2();
            reset();
        }
    }
}

naVertical = () => {
    for(var i = 0; i < 3; i++){
        if(tabuleiro[i] == 'X' && tabuleiro[i + 3] == 'X' && tabuleiro[i + 6] == 'X'){
            setVitoria1();
            reset();
        }
        if (tabuleiro[i] == 'O' && tabuleiro[i + 3] == 'O' && tabuleiro[i + 6] == 'O'){
            setVitoria2();
            reset();
        }
    }
}

naDiagonal = () => {
    if ((tabuleiro[0] == 'X' && tabuleiro[4] == 'X' && tabuleiro[8] == 'X') || 
    (tabuleiro[2] == 'X' && tabuleiro[4] == 'X' && tabuleiro[6] == 'X')){
        setVitoria1();
        reset();
    } else if ((tabuleiro[0] == 'O' && tabuleiro[4] == 'O' && tabuleiro[8] == 'O') || 
    (tabuleiro[2] == 'O' && tabuleiro[4] == 'O' && tabuleiro[6] == 'O')){
        setVitoria2();
        reset();
    }
}

posicao = (cel, pos) => {
    if(tabuleiro[pos] == undefined) {
        cel.innerHTML = formas[jogadorAtual.forma];
        tabuleiro[pos] = formas[jogadorAtual.forma];

        (jogadorAtual.forma == 0) ? jogadorAtual = jogador2 : jogadorAtual = jogador1;
        setJogadorAtual();
    } else document.getElementById('resultado').innerHTML = 'Célula já marcada.';

    naHorizontal();
    naVertical();
    naDiagonal();

    if(tabuleiroCheio()){
        setEmpate();
        reset();
    }
}

document.getElementsByTagName('form')[0].addEventListener('submit', (e) => {
    e.preventDefault();
})

