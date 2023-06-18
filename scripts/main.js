"use strict";
let color = "black";
let click = true;

// Change Button Color
const colorSquare = function () {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

const populateBoard = function (rowsAndColumns=16, boardSize=500) {
    let board = document.querySelector(".canvas");
    board.style.gridTemplateColumns = `repeat(${rowsAndColumns}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${rowsAndColumns}, 1fr)`;
    
    const makeGrid = function () {
        for (let i = 0; i < rowsAndColumns; i++) {
          for (let j = 0; j < rowsAndColumns; j++) {
            let square = document.createElement("div");
            
            square.addEventListener("mouseover", colorSquare);

            square.style.backgroundColor = "white";
            square.style.width = `${boardSize/rowsAndColumns}px`;
            square.style.height = `${boardSize/rowsAndColumns}px`;
            board.appendChild(square);
          };
        };
      };

    const deleteGridItems = function (container) {
        let gridItems = container.querySelectorAll("div")
        console.log(gridItems)
        gridItems.forEach((gridItem) => {
            gridItem.remove()
        })
    };

    deleteGridItems(board)
    makeGrid();
}

// Populating Board
populateBoard();

// Changing Size
const changeBoardSize = function (input) {
    if (input >= 2 && input <= 100) {
        document.querySelector(".error").style.dipslay = "none"
        populateBoard(input);
    } else {
        document.querySelector(".error").style.dipslay = "flex"
    }
}

const changeColor = function (input) {
    color = input;
}


// Resetting Board (but not deleting divs)
const resetBoard = function () {
    let board = document.querySelector(".canvas");
    let gridItems = board.querySelectorAll("div")
        console.log(gridItems)
        gridItems.forEach((gridItem) => {
            gridItem.style.backgroundColor = "white"
        })
}

// Checking for clicks and doing things
document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click;

        if (click) {
            document.querySelector(".mode").textContent = "Mode: Colouring"
        } else {
            document.querySelector(".mode").textContent = "Mode: Not Colouring"
    }
    }
})