jest.spyOn(console, "error").mockImplementation();

describe("Test", () => {
  const PIXI = require("pixi.js");
  jest.spyOn(console, "log").mockImplementation((x) => x);

  const app = new PIXI.Application({
    width: 640,
    height: 480,
  });
  document.body.appendChild(app.view);

  test("app should be exist", () => {
    expect(app).toBeTruthy();
  });
});
