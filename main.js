const square = document.querySelectorAll('.square');
const arraySquareRow = [[square[0], square[1], square[2]], [square[3], square[4], square[5]], [square[6], square[7], square[8]]];
const arraySquareCol = [[square[0], square[3], square[6]], [square[1], square[4], square[7]], [square[2], square[5], square[8]]]
const arraySquareDiag = [[square[0], square[4], square[8]], [square[2], square[4], square[6]]]
console.log(arraySquareRow);
console.log(arraySquareCol);
console.log(arraySquareDiag);
document.querySelectorAll('.square').innerHTML = '';
let jogador = 'X';
let result;

document.onclick = e => {
    if (e.target.innerHTML != '') {
        avisoRepetida();
    } else {
        if (jogador === 'X') {
            e.target.innerHTML = jogador;
            checarX();
            jogador = 'O';
        } else {
            e.target.innerHTML = jogador;
            checarO();
            jogador = 'X';
        }
    }

}

function checarX() {
    arraySquareRow.forEach(element => {
        result = element.every(e => {
            if (e.innerHTML === 'X') {
                return (e.innerHTML === "X")
            }
        });
        if (result) {
            vitoria();
        }
    });
    arraySquareCol.forEach(element => {
        result = element.every(e => {
            if (e.innerHTML == 'X') {
                return (e.innerHTML === "X")
            }
        });
        if (result) {
            vitoria();
        }
    });
    arraySquareDiag.forEach(element => {
        result = element.every(e => {
            if (e.innerHTML === 'X') {
                return (e.innerHTML === "X")
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
            if (e.innerHTML === 'O') {
                return (e.innerHTML === "O")
            }
        });
        if (result) {
            vitoria();
        }
    });
    arraySquareCol.forEach(element => {
        result = element.every(e => {
            if (e.innerHTML == 'O') {
                return (e.innerHTML === "O")
            }
        });
        if (result) {
            vitoria();
        }
    });
    arraySquareDiag.forEach(element => {
        result = element.every(e => {
            if (e.innerHTML === 'O') {
                return (e.innerHTML === "O")
            }
        });
        if (result) {
            vitoria();
        }
    });
}

function vitoria() {
    if (result) {
        console.log(`Vitória de ${jogador}`);
    }
}

function avisoRepetida() {
    const aviso = document.getElementById('erro');
    aviso.classList.add('mostrar');
    setTimeout(() => {
        aviso.classList.remove('mostrar');
    }, 1000);
}