/**
 * Build a double linear sequence like (for x => y: x * 2 + 1 && z: x * 3 + 1)
 * Then return the value for u(n)
 *
 * @param {number} n The index of the value to find
 * @return {number} The value of u(n)
 */
const dblLinear = n => {
  let sequence = [1];
  for (let i = 0; i < n; i++) {
    sequence.push(2 * sequence[i] + 1);
    sequence.push(3 * sequence[i] + 1);
    sequence = [...new Set(sequence)].sort((a, b) => a - b);
  }
  return sequence[n];
};
dblLinear(20);

// TESTS
const assert = require('assert');
describe('Test suite for dblLinear', () => {
  it('should return 22', () => assert.deepStrictEqual(dblLinear(10), 22));
  it('should return 57', () => assert.deepStrictEqual(dblLinear(20), 57));
  it('should return 91', () => assert.deepStrictEqual(dblLinear(30), 91));
  it('should return 175', () => assert.deepStrictEqual(dblLinear(50), 175));
  it('should return 447', () => assert.deepStrictEqual(dblLinear(100), 447));
});
