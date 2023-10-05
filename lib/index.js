const inquirer = require("inquirer");
const Logo = require("./logo");

const logoPrompts = [
  {
    type: "input",
    name: "text",
    message: "Enter the text for the logo:",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Enter the text color for the logo (Enter color keyword OR a hexadecimal number):",
  },
  {
    type: "list",
    name: "shape",
    type: "list",
    message: "What shape do you want?",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Enter the shape color for the logo (Enter color keyword OR a hexadecimal number):",
  },
];

inquirer
  .prompt(logoPrompts)
  .then((answers) => {
    const logoInstance = new Logo(
      answers.text,
      answers.textColor,
      answers.shape,
      answers.shapeColor
    );

    logoInstance.generateSVG();
    logoInstance.printOutputText();
  })
  .catch((error) => {
    console.log("Error:", error);
  });

inquirer();
