"use strict";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = `wah bete jeet gaye😍🍷`;

// console.log(
//   (document.querySelector('.message').textContent = `wah bete jeet gaye😍🍷`)
// );
// document.querySelector('.number').textContent = 99;
// document.querySelector('.score') =18;

// document.querySelector ('.guess').value = 23;
// console.log(document.querySelector ('.guess').value = 23);

//secret Number value:-
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

//Printing into the console (number and datatype)
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //NO input
  if (!guess) {
    document.querySelector(".message").textContent = `💢 PLEASE ENTER A VALUE`;

    //when wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "💛you win";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    //guess low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬇ Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `😂TUMSE NAA HO PAYEGA`;
      document.querySelector(".score").textContent = 0;
    }

    //guess high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⏏ Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `😂TUMSE NAA HO PAYEGA`;
      document.querySelector(".score").textContent = 0;
    }
  }
});

// AGAIN FUNCTIONALITY /////
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  //message
  document.querySelector(".message").textContent = `Start guessing...`;

  //score
  document.querySelector(".score").textContent = 20;

  if (score < 1) {
    document.querySelector(".score").textContent = 20;
  }
  // background color
  document.querySelector("body").style.backgroundColor = "rgb(39, 39, 39)";

  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";
});
