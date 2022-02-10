const { randomNumber, sendMessage } = require("./common");

// Example of being able to write a more complex function
const complexFunction = (num) => {
  sendMessage(`${num}: That's a small number.`);
};

// Store the possible results so we can get similar to if statements results
const messageObj = {
  1: complexFunction,
  2: (num) => {
    sendMessage(`${num}: Less than 40, more than 20.`);
  },
  3: (num) => {
    sendMessage(`${num}: Oh we're halfway there!`);
  },
  4: (num) => {
    sendMessage(
      `${num}: Almost full. Or something. It doesn't have to make sense.`
    );
  },
  5: (num) => {
    sendMessage(
      `${num}: It must be more than 80. Don't know about less than 100 though.`
    );
  },
};

// Pick a message and "send it"
// By way of dividing the number by 20 to pick one of the 5 values in messageObj
const messenger = (num) => {
  messageObj[Math.ceil(num / 20)](num);
};

let i = 10;
while (i-- > 0) {
  messenger(randomNumber() + 1);
}
