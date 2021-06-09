const PIXI = require("pixi.js-legacy");

describe("Test", () => {
    const spyLog = jest.spyOn(console, "log").mockImplementation((x) => x);

    const app = new PIXI.Application({
        width: 640,
        height: 480,
        forceCanvas: true,
    });
    document.body.appendChild(app.view);

    test("app should be exist", () => {
        expect(app).toBeTruthy();
    })
})