/* 
The objective of this is to play with if, if else, switch, and objects as switches.

This is all rather subjective. Although it would be interesting to see
if one of them provides a performance benefit given enough options.

So. I'll write the same program over and over. 

The program will... generate a random number 100 times... then print out a message
for the different possibilities.

*/

const { randomNumber, sendMessage } = require("./common");

// Pick a message and "send it"
const messenger = (num) => {
  if (num <= 20) {
    sendMessage(`${num}: That's a small number.`);
  } else if (num <= 40 && num > 20) {
    sendMessage(`${num}: Less than 40, more than 20.`);
  } else if (num <= 60 && num > 40) {
    sendMessage(`${num}: Oh we're halfway there!`);
  } else if (num <= 80 && num > 60) {
    sendMessage(
      `${num}: Almost full. Or something. It doesn't have to make sense.`
    );
  } else {
    sendMessage(
      `${num}: It must be more than 80. Don't know about less than 100 though.`
    );
  }
};

let i = 10;
while (i-- > 0) {
  messenger(randomNumber());
}
