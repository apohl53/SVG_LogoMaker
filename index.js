import inquirer from "inquirer";
import Logo from "./lib/logo.js";

async function prompt() {
  while (true) {
    const logoPrompts = [
      {
        type: "input",
        name: "text",
        message: "Enter the text for the logo (3 character maximum):",
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

    const answers = await inquirer.prompt(logoPrompts);

    const logoInstance = new Logo(
      answers.text,
      answers.textColor,
      answers.shape,
      answers.shapeColor
    );

    logoInstance.generateSVG();
    logoInstance.printOutputText();

    const { continuePrompt } = await inquirer.prompt([
      {
        type: "confirm",
        name: "continuePrompt",
        message: "Do you want to create another logo?",
      },
    ]);

    if (!continuePrompt) {
      break;
    }
  }
}

prompt();
