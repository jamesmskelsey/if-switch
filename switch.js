class Papaya {
  render() {
    return "I'm a papaya component.";
  }
}

class Orange {
  render() {
    return "I'm an orange component.";
  }
}

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
