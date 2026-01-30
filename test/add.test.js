const add = require("../src/add");

test("adds 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("add 3 + 6", ()=>{
    expect(add(3 , 6)).toBe(9);
})
