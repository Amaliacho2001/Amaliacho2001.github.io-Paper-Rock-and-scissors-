function userChoice(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    const result = getResult(choice, computerChoice);

    document.getElementById('result').innerText = `Your election: ${choice}. Computer election: ${computerChoice}. Result: ${result}`;
}

function getResult(user, computer) {
    if (user === computer) {
        return 'Tied';
    } else if ((user === 'rock' && computer === 'scissors') ||
               (user === 'paper' && computer === 'rock') ||
               (user === 'scissors' && computer === 'paper')) {
        return '¡You win!';
    } else {
        return '¡You lose!';
    }
}
  
