const allCaps = require("../script"); 

describe("allCaps", () => {
  beforeEach(() => {
    
    //Simulate DOM annars funkar det inte :(
    document.body.innerHTML = `
      <input id="textInput" value="hello world" />
      <button id="capsButton">Make Uppercase</button>
    `;
  });

  test("should convert input text to uppercase", () => {
    const result = allCaps();
    expect(result).toBe("HELLO WORLD");
  });
});

