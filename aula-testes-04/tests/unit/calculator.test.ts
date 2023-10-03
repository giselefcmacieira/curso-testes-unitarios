import calculator from "calculator";

describe("calculator tests", () => {
  it("should sum two numbers", async () => {
    const sum = calculator.sum(1, 2)
    expect(sum).toBe(3);
  });
  it("should subtract two numbers", async () => {
    const sub = calculator.sub(7, 5)
    expect(sub).toBe(2);
  });
  it("should multiply two numbers", async () => {
    const mul = calculator.mul(2, 3)
    expect(mul).toBe(6);
  });
  it("should divide two numbers", async () => {
    const div = calculator.div(10, 5)
    expect(div).toBe(2);
  });
  it("should return 0 when diving by zero", async () => {
    const div = calculator.div(10, 0)
    expect(div).toBe(0);
  });
})