const getComputerChoice = () => {
    randomChoice = Math.floor(Math.random()*3);
    if (randomChoice === 0){
        return 'rock';
    }else if (randomChoice === 1) {
        return 'paper';
    }else {
        return 'scissors'
    }
}



const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log (`You lose! ${computerSelection} beats ${playerSelection}`);
        return 'lose'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log (`You lose! ${computerSelection} beats ${playerSelection}`);
        return 'lose'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log (`You lose! ${computerSelection} beats ${playerSelection}`);
        return 'lose'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 'win';

    }  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 'win';

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 'win';
    } else {
        console.log (`It's a tie`);
        return 'tie';
    }
}




const game = () => {
    let count = 5;
    let playerScore = 0;
    let computerScore = 0;
    
  
    let outcome = 0;

    for (let i = 0; i < count; i++) {
        let playerSelection = prompt("Choose Rock, paper or Scissors to play");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
         outcome = playRound(playerSelection, computerSelection);
       if (outcome === 'win') {
        playerScore +=1;
        }else if (outcome ==='lose') {
         computerScore +=1;
        }else if (outcome === 'tie'){
        count +=1;
    }
    }
    if (playerScore > computerScore){
        console.log ('You win!');
    } else {
        console.log ('You lose!')
    }
   
}

game();