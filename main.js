/* object to display score */

  let score = {
  wins: 0,
  losses: 0,
  ties: 0
} 

function playGame(playersMove) {
  let compMove = '';
  let result = '';
  computerMove();

  function computerMove() {

    let rNum = Math.floor(Math.random() * 99 + 1);

    if (rNum > 0 && rNum <= 33) {
      compMove = 'Rock';
    } else if (rNum > 33 && rNum <= 66) {
      compMove = 'Paper';
    }
    if (rNum > 66 && rNum <= 99) {
      compMove = 'Scissors';
    }
  }

  if (playersMove === 'Rock') {

    if (compMove === 'Rock') {
      result = 'Tie!'
    } else if (compMove === 'Paper') {
      result = 'You lose!'
    } else if (compMove === 'Scissors') {
      result = 'You win!'
    }

  } else if (playersMove === 'Paper') {

    if (compMove === 'Rock') {
      result = 'You win!'
    } else if (compMove === 'Paper') {
      result = 'Tie!'
    } else if (compMove === 'Scissors') {
      result = 'You lose!'
    }

  } else if (playersMove === 'Scissors') {

    if (compMove === 'Rock') {
      result = 'You lose!'
    } else if (compMove === 'Paper') {
      result = 'You win!'
    } else if (compMove === 'Scissors') {
      result = 'Tie!'
    }
  }

  let resultDisplay = document.querySelector('.display');
  
  resultDisplay.style.padding = '15px 38px';
  

  resultDisplay.innerHTML = `You picked  &#8680 ${playersMove}.<br><br><br>Computer picked &#8680 ${compMove}.<br><br><br> Result &#8680;  <span class="remark">${result}<span>`

let win = document.querySelector('.winsDisplay');
  
  let loss = document.querySelector('.lossesDisplay');
  
  let tie = document.querySelector('.tiesDisplay');
  
  if (result === 'You win!') {
    win.innerHTML = score.wins += 1
  
  } else if (result === 'You lose!') {
    loss.innerHTML = score.losses += 1
  
  } else if (result === 'Tie!') {
    tie.innerHTML = score.ties += 1
  
  }

  /* Result background color change  */
  
  let remarkSpan = document.querySelector('.remark');

  if (result === 'You win!') {
    remarkSpan.style.background = 'green'
    
  } else if (result === 'You lose!') {
    remarkSpan.style.background = 'red'
    
  } else if (result === 'Tie!') {
    remarkSpan.style.background = 'orange'
    
  }
}