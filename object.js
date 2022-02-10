const { Orange } = require("./components/Orange");
const { Papaya } = require("./components/Papaya");

const fruits = {
  Orange,
  Papaya,
};

const app = () => {
  const display = "Nothing";

  return fruits[display] ? new fruits[display]().render() : "Select an option.";
};

console.log(app());
