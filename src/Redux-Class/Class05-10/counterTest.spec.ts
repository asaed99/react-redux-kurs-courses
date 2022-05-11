export function Counter() {
  describe("counter", () => {
    const counter = (state = 0, action: { type?: any }) => {
      switch (action.type) {
        case "INCREMENT":
          return state + 1;
        case "DECREMENT":
          return state - 1;
        default:
          return state;
      }
    };
    it("should handle initial state", () => {
      expect(counter(0, { type: "INCREMENT" })).toEqual(1);
    });

    it("should handle increment", () => {
      expect(counter(1, { type: "INCREMENT" })).toEqual(2);
    });
    it("should handle decrement", () => {
      expect(counter(2, { type: "DECREMENT" })).toEqual(1);
    });
    it("should handle decrementToZero", () => {
      expect(counter(1, { type: "DECREMENT" })).toEqual(0);
    });
    it("should handle unknown", () => {
      expect(counter(1, { type: "SOMETHING_ELSE" })).toEqual(1);
    });
    it("should handle undefined", () => {
      expect(counter(undefined, {})).toEqual(0);
    });
    console.log("TEST PASSED!");
  });
}
