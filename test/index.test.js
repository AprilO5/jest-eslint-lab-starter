const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe("capitalizeWords", () => {
  test("capitalizes each word in a string", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World")
  })
})
