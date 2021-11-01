let stringReverse = require("./stringReverse");

test("Properly reverses a string", () => {
  expect(stringReverse("hello")).toBe("olleh");
  expect(stringReverse("this is a test")).toBe("tset a si siht");
});
