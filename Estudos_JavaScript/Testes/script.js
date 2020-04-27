var agoraVai = document.querySelector('input#agoraVai');
var corpo = document.querySelector('body');
agoraVai.addEventListener('click', clicou);
var teste = false;

function clicou() {
    if (teste == true){
        teste = false;
        corpo.style.background = 'rgb(70, 142, 236)';
        agoraVai.style.background = 'black';
        agoraVai.style.color = 'rgb(70, 142, 236)';
        paragrafo.innerText = 'Branco';
    } else {
        teste = true;
        corpo.style.background = 'black';
        agoraVai.style.background = 'rgb(70, 142, 236)';
        agoraVai.style.color = 'black';
        paragrafo.innerText = 'Preto';
    }

}