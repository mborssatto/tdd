const divide = require('../src/calculator')

describe('calculator library', () => {
  test('division of 12 by 3 should return 4', () => {
    const expectedOutput = 4
    const actualOutput = divide(12, 3)
    expect(actualOutput).toBe(expectedOutput)
  })

  test('division of strings should throw error', () => {
    expect(() => divide('string', 'another string')).toThrow(TypeError)
  })
})
