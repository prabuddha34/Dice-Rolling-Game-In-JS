const numOfDice = document.querySelector("input"); // or use id="numOfDice"
const diceResult = document.getElementById("diceresult");
const diceImages = document.getElementById("diceImages");

function rollDice() {
  const values = [];
  const images = [];

  diceImages.innerHTML = ""; 
  diceResult.textContent = ""; 

  for (let i = 0; i < numOfDice.value; i++) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    values.push(randomNumber);
    images.push(`${randomNumber}.png`);
  }

  diceResult.textContent = `You rolled: ${values.join(", ")}`;

  for (let imgSrc of images) {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "Dice";
    img.style.width = "50px";
    img.style.margin = "5px";
    diceImages.appendChild(img);
  }
}
