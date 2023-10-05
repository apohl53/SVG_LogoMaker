class Shape {
  constructor() {
    this.color = "";
  }

  setColor(colorVar) {
    this.color = colorVar;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Square, Triangle };
