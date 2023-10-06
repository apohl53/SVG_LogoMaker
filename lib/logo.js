import { writeFileSync } from "fs";
export default class Logo {
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
    writeFileSync("logo.svg", svgCode);
  }

  printOutputText() {
    console.log("Generated logo.svg");
  }
}
