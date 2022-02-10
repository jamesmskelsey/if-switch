const { Papaya } = require("./components/Papaya");
const { Orange } = require("./components/Orange");

const app = () => {
  const display = "Orange";

  switch (display) {
    case "Papaya":
      return new Papaya().render();
    case "Orange":
      return new Orange().render();
    default:
      return "Select an option.";
  }
};

console.log(app());
