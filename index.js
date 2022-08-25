// import all HTML elements which we want to change 
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let card = document.getElementsByClassName("card");
let resta = document.querySelector(".restart");
let turn = "X";
let contaner = document.querySelector(".container")
let bigbox = document.querySelector(".bigBox")

// set properties by using java script in imported element
bigbox.style.display = "none";
resta.style.display = "none";
first.style.backgroundColor = "#ffa500";
second.style.backgroundColor = "aliceblue";

// function change the simbol which is use in game 
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

// function when one player win then restart game
function restart(){  
    window.location.reload();
}   
  
// function change the color when change trun 
function color() {
    if (turn === "X") {
        first.style.backgroundColor = "#ffa500";
        second.style.backgroundColor = "aliceblue";
    } else {
        second.style.backgroundColor = "#ffa500";
        first.style.backgroundColor = "aliceblue";
    }
}

// this function is responsible for decide who is winner and 
// responsible for all changes after winner is declare
const checkWin = () => {
    let box = document.getElementsByClassName('box');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach(e => {
        if ((box[e[0]].innerHTML === box[e[1]].innerHTML) &&
            (box[e[2]].innerHTML === box[e[1]].innerHTML) &&
            (box[e[0]].innerHTML !== '')) {
            contaner.style.display = 'none';
            bigbox.style.display = 'flex';
            first.style.display = 'none';
            second.style.display = 'none';
            resta.style.display = "block";
            if (box[e[0]].innerHTML === "X") {
                bigbox.innerHTML = "Winner is Player 1";
            } else {
                bigbox.innerHTML = "Winner is Player 2";
                
            }
        }
    });
}

// function game logic
let array = Array.from(card).forEach(element => {
    let box = element.querySelector('.box')
    element.addEventListener('click', () => {
        if (box.innerHTML === '') {
            box.innerHTML = turn;
            turn = changeTurn();
            color();
            checkWin();
        }
    })
})
