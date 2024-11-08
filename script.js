const GameBoard = (()=>{

    let gameboard = ["","","","","","","","",""];

    const render = ()=>{
        let boardHTML ="";
         gameboard.forEach((square, index)=>{
          boardHTML += `<div class="square" id=square-${index}>${square}</div>`

         })
    }
    document.querySelector("#gameboard").innerHTML= boardHTML;

    return{
        render,
    }


})();

const createPlayer = (name, mark) =>{
    return {
        name,
        mark
    }
}

const Game = (() =>{
  let players = [];
  let currentPlayerIndex = 0;
  let gameOver = false;

  const start=() =>{
   players = [  createPlayer(document.querySelector("#player1").value)

    
   ]
  }

})();

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", ()=>{

})
  