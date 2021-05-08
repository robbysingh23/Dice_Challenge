// Player 1 dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let image1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".dice .img1").setAttribute("src", image1);

// Player 2 dice
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let image2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".dice .img2").setAttribute("src", image2);

// Change the title to dislay a winner
if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector(".container h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector(".container h1").innerHTML = "Draw!";
}