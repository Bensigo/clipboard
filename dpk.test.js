const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns the key 'passed' when given an event", () => {
    const partitionKey = "passed"
    const event = { partitionKey };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(partitionKey)
  });
  it("Returns a hash when given empty object as event", () => {
    const event = {};
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBe(128);
  });

  it("Returns a hashed hex key on passing > 256 long partionKey", () => {
    const partitionKey = "xkjdjkfvdfkvjfjkbjkvjkdjvdsdkjfkjsdfksjfjksjjvdfjkjkkjsjkfcjkskfjsdjkvjvkjhkvkdjvksfkjsdkjvskjdjksdjkfskjkjsdksjkvjkbjkfbjjkbkbjkvskjfsdkhfdfkvvbnfbnxbnfbndfnvfdjhvdjhvdjhvjfhvjhdvjdhvjdhfvdjhfvjhdfvjhdfvhjdfjhvdfjvhdfvhdfvhjdfhjvdjhvhdgvhdfvkhdfkvkdfvkhdfhkvhkdxfvhkdfkhvhkdvdfvhkdvhdkvdhkfvkdfvkhdfvkdfkhvfkh";
    const event = { partitionKey };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBe(128);
  });
});
