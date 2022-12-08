function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') throw new TypeError()
  return a / b
}
module.exports = divide
