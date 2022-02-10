/* 
The objective of this is to play with if, if else, switch, and objects as switches.

This is all rather subjective. Although it would be interesting to see
if one of them provides a performance benefit given enough options.

So. I'll write the same program over and over. 

The program will... generate a random number 100 times... then print out a message
for the different possibilities.

*/

const { Orange } = require("./components/Orange");
const { Papaya } = require("./components/Papaya");

const app = () => {
  const display = "Orange";

  if (display === "Orange") {
    return new Orange().render();
  } else if (display === "Papaya") {
    return new Papaya().render();
  } else {
    return "Select an option.";
  }
};

console.log(app());
