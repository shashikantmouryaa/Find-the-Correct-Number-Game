let randomNumber = Math.floor(Math.random() * 10);
let attempts = 0;
let maxAttempts = 5;

function checkNumber() {
  let userInput = document.getElementById("num").value;
  let userNumber = parseInt(userInput);
  let output = document.getElementById("output");
  let atm = document.getElementById("atm");
  let atmMsg = document.getElementById("atmMsg");


  if (isNaN(userNumber) || userNumber < 0 || userNumber > 9) {
    alert("Please enter a number between 0 and 9");
    return;
  }

  attempts++;

  if (userNumber === randomNumber) {
    output.innerHTML = `🎉 Correct! Number was ${randomNumber}<br>
                        Attempts used : ${attempts}`;
                        atm.innerHTML = "";
                        atmMsg.innerHTML = "";
    endGame();
  } 
  else if (userNumber > randomNumber) {
    atm.innerHTML = `Attempts left : ${maxAttempts - attempts}`;
    atmMsg.innerHTML = `⬆ Too high! Try Again.`;
    document.getElementById("num").value = "";
  } 
  else {
    atm.innerHTML = `Attempts left : ${maxAttempts - attempts}`; 
    atmMsg.innerHTML = `⬇ Too low! Try Again.`; 
    document.getElementById("num").value = "";
  }

  if (attempts >= maxAttempts && userNumber !== randomNumber) {
    output.innerHTML = `❌ Game Over! Number was ${randomNumber}`;
    endGame();
  }
}

function endGame() {
  document.getElementById("num").disabled = true;
  document.getElementById("checkBtn").disabled = true;
  document.getElementById("playAgainBtn").style.display = "inline-block";
}

function playAgain() {
  // Reset everything
  randomNumber = Math.floor(Math.random() * 10);
  attempts = 0;

  document.getElementById("num").value = "";
  document.getElementById("num").disabled = false;
  document.getElementById("checkBtn").disabled = false;
  document.getElementById("playAgainBtn").style.display = "none";
  document.getElementById("output").innerHTML = "";

}
