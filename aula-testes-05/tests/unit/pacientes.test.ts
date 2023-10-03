import { generateProtocolForPacient } from "protocols-generator";

jest.mock("uuid", () => {
  return {
    v4: () => { return "Meu valor muito doido" }
  }
});

describe("calculator tests", () => {
  it("should work", async () => {
    const protocol = generateProtocolForPacient('Gisele', 'Macieira', false)
    expect(protocol.protocol).toBe("Meu valor muito doido");
  });
});