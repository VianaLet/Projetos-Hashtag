const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaVoltar = document.getElementById('anterior');
const audioCapitulo = document.getElementById('audio-capitulo');
const nomeCapitulo = document.getElementById('capitulo');


const numeroCapitulos = 10 ;

let estaTocando = 0 ;
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    estaTocando = 1 ;
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add("bi-play-circle-fill");
    estaTocando = 0 ;

}
function tocarOuPausar(){
    if (estaTocando === 0) {
        tocarFaixa();
        
    }
    else{
        pausarFaixa();
        
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = "Capitulo " + capituloAtual
}

function proximaFaixa(){
    if (capituloAtual === numeroCapitulos){
        capituloAtual = 1;
        
    }
    else{
    capituloAtual = capituloAtual + 1
    }
    audioCapitulo.src = "books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    estaTocando = 1 ;
    trocarNomeFaixa()
}
function voltarFaixa(){
    if (capituloAtual === 1){
        capituloAtual = numeroCapitulos;
        
    }
    else{
    capituloAtual = capituloAtual - 1
    }
    audioCapitulo.src = "books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    estaTocando = 1 ;
    trocarNomeFaixa()
}

// botaoPlayPause.onclick(tocarFaixa)
botaoPlayPause.addEventListener('click', tocarOuPausar); //(evento, consequência)
botaVoltar.addEventListener('click', voltarFaixa);
botaoAvancar.addEventListener('click', proximaFaixa);

