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

const playerSelection = 'rock';
const computerSelection = getComputerChoice();


const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;

    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;

    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You win! ${playerSelection} beats ${computerSelection}`;

    }  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`;

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `It's a tie`;
    }
}

console.log (playerSelection);
console.log (computerSelection);

console.log (playRound(playerSelection, computerSelection));

