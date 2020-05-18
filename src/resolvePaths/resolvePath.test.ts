import resolvePath from ".";

xdescribe("fn resolvePath", () => {
  test("returns input unaltered", () => {
    const input = "ploop";
    const result = resolvePath(input);
    expect(result).toBe(false);
  });
});
