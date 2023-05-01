const square = document.querySelectorAll('.square');
const arraySquare = [];
for (let index = 0; index < square.length; index++) {
    arraySquare[index] = square[index];
    
}
const jogo = document.querySelector('.jogo');
const arraySquareRow = [[square[0], square[1], square[2]], [square[3], square[4], square[5]], [square[6], square[7], square[8]]];
const arraySquareCol = [[square[0], square[3], square[6]], [square[1], square[4], square[7]], [square[2], square[5], square[8]]]
const arraySquareDiag = [[square[0], square[4], square[8]], [square[2], square[4], square[6]]]
console.log(arraySquare);

console.log(arraySquareRow);
console.log(arraySquareCol);
console.log(arraySquareDiag);
document.querySelectorAll('.square').innerHTML = '';
let jogador = 'X';
let result;
let contagem = 0;
let resultado

jogo.onclick = e => {
    if (e.target.innerHTML != '') {
        avisoRepetida();
    } else {
        if (jogador === 'X') {
            e.target.innerText = jogador;
            checarX();
            jogador = 'O';
        } 
        setTimeout(() => {
        for (let index = 0; index < square.length; index++) {
            let i = Math.floor(Math.random(square)*square.length);
            if (square[i].innerText === ''){
                square[i].innerText = jogador;
                checarO();
                jogador = 'X';
                break;
            }
            
        }}, 500);
               
    }
    if (arraySquare.every(e => {return e.innerText != ''})){
        empate();
    } 
}

while(jogador === 'O'){
    
}


function checarX() {
    arraySquareRow.forEach(element => {
        result = element.every(e => {
            if (e.innerText === 'X') {
                return (e.innerText === "X")
            }
        });
        if (result) {
            vitoria();
        }
    });
    arraySquareCol.forEach(element => {
        result = element.every(e => {
            if (e.innerText == 'X') {
                return (e.innerText === "X")
            }
        });
        if (result) {
            vitoria();
        }
    });
    arraySquareDiag.forEach(element => {
        result = element.every(e => {
            if (e.innerText === 'X') {
                return (e.innerText === "X")
            }
        });
        if (result) {
            vitoria();
        }
    });
}

function checarO() {
    arraySquareRow.forEach(element => {
        result = element.every(e => {
            if (e.innerText === 'O') {
                return (e.innerText === "O")
            }
        });
        if (result) {
            vitoria();
        }
    });
    arraySquareCol.forEach(element => {
        result = element.every(e => {
            if (e.innerText == 'O') {
                return (e.innerText === "O")
            }
        });
        if (result) {
            vitoria();
        }
    });
    arraySquareDiag.forEach(element => {
        result = element.every(e => {
            if (e.innerText === 'O') {
                return (e.innerText === "O")
            }
        });
        if (result) {
            vitoria();
        }
    });
}

function vitoria() {
    
        const acabou = document.getElementById('acabou');
        const popup = document.getElementById('popup');
        popup.innerHTML += `<h1>Vitória do jogador: ${jogador}</h1>`
        acabou.classList.add('mostrar');
    
}

function empate() {
        const acabou = document.getElementById('acabou');
        const popup = document.getElementById('popup');
        popup.innerHTML += `<h1>Empate</h1>`
        acabou.classList.add('mostrar');
}

function avisoRepetida() {
    const aviso = document.getElementById('erro');
    aviso.classList.add('mostrar');
    setTimeout(() => {
        aviso.classList.remove('mostrar');
    }, 1000);
}

function recomecar() {
    window.location.reload();
}