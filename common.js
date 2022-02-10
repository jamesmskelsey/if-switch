// Returns a number between 1-100
const randomNumber = () => {
  return Math.floor(Math.random() * 100);
};

// The 'I'm lazy to type console.log' over and over again function.
const sendMessage = (message) => {
  console.log(message);
};

module.exports = {
  randomNumber,
  sendMessage,
};
