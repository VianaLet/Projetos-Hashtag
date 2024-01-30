const botaoPlayPause = document.getElementById('play-pause')

const audioCapitulo = document.getElementById('audio-capitulo')

const numeroCapitulos = 10 ;

let estaTocando = 0 ;

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

botaoPlayPause.addEventListener('click', tocarOuPausar); //(evento, consequência)
// botaoPlayPause.onclick(tocarFaixa)