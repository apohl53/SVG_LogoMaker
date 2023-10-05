class Logo {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  //should the shapeColor be 200 x 300?
  generateSVG() {
    const svgCode = `<svg>
      <text fill="${this.textColor}">${this.text}</text>
      <rect fill="${this.shapeColor}" width="100" height="100"></rect>
    </svg>`;

    // Save the SVG file as logo.svg in the project directory
    // Example using Node.js fs module:
    const fs = require("fs");
    fs.writeFileSync("logo.svg", svgCode);
  }

  printOutputText() {
    // Print the output text "Generated logo.svg" in the command line
    console.log("Generated logo.svg");
  }
}

const logo = new Logo("SVG", "white", "circle", "green");
const svgCode = logo.generateSVG();
console.log(svgCode);
