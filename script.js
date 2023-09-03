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

setJogadorAtual = () => {
    document.getElementById('jogadorAtual').innerHTML = 'Jogador Atual: ' + jogadorAtual.nome;
}

tabuleiroCheio = () => {
    var preenchidos = 0;
    for(var i = 0; i < tabuleiro.length; i++)
    if(tabuleiro[i] != undefined)
    preenchidos++;
    preenchidos.length == tabuleiro.length;
}

naHorizontal = () => {

}

naVertical = () => {
    
}

naDiagonal = () => {
    
}

posicao = () => {
    
}