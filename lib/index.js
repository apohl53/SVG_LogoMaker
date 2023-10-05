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
    message: "Enter the text color for the logo:",
  },
  {
    type: "input",
    name: "shape",
    message: "Enter the shape for the logo:",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape color for the logo:",
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
