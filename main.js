document.querySelectorAll('.square').innerHTML = '';
let jogador = 'X';

document.onclick = e => {
    if (e.target.innerHTML != '') {
        avisoRepetida();
    } else {
        if (jogador === 'X') {
            e.target.innerHTML = jogador;
            jogador = 'O';
        } else {
            e.target.innerHTML = jogador;
            jogador = 'X';
        }
    }
}

function avisoRepetida() {
    const aviso = document.getElementById('erro');
    aviso.classList.add('mostrar');
    setTimeout(() => {
        aviso.classList.remove('mostrar');
    }, 1000);
}