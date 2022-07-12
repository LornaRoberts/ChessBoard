/* Write a program that creates a string that represents an 8x8 grid, 
using newline characters to seperate lines. At each position of the grid 
there is either a space or a # character. The characters should form
a chessboard. */


function chessBoard(num = 8){

const gridSize = num;
let board = "";

 for (let i = 1; i < ((gridSize * gridSize) + gridSize); i++){
    if ( i % (gridSize + 1) === 0){
      board += "\n";
    }else if (i % 2 === 0){
      board += "#";
    }else {
      board += " ";
    }  
    
  } 
  console.log(board);
};

 chessBoard();

