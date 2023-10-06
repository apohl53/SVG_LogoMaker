const { test } = require("@jest/globals");
const { Circle, Square, Triangle } = require("./shapes.js");

describe("Circle test", () => {
  test("test for a circle with a blue background", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="blue" />'
    );
  });
});

describe("Square test", () => {
  test("test for a circle with a purple background", () => {
    const shape = new Square();
    shape.setColor("purple");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="purple" />'
    );
  });
});

describe("Triangle test", () => {
  test("test for a triangle with a #ff0000 background", () => {
    const shape = new Triangle();
    shape.setColor("#ff0000");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="#ff0000" />'
    );
  });
});
