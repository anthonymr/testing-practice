const calculator = require('./calculator');

describe('add', () => {
  test('0 + 1 expected to be 1', () => {
    expect(calculator.add(0, 1)).toBe(1);
  });

  test('10 + 20 expected to be 30', () => {
    expect(calculator.add(10, 20)).toBe(30);
  });

  test('-10 + 20 expected to be 10', () => {
    expect(calculator.add(-10, 20)).toBe(10);
  });
});

describe('subtract', () => {
  test('0 - 1 expected to be -1', () => {
    expect(calculator.subtract(0, 1)).toBe(-1);
  });

  test('10 - 20 expected to be -10', () => {
    expect(calculator.subtract(10, 20)).toBe(-10);
  });

  test('-10 - 20 expected to be -30', () => {
    expect(calculator.subtract(-10, 20)).toBe(-30);
  });
});

describe('divide', () => {
  test('1 / 0 expected to throw error = "Cant divide by 0."', () => {
    expect(() => calculator.divide(1, 0)).toThrow('Cant divide by 0.');
  });

  test('10 / 20 expected to be 0.5', () => {
    expect(calculator.divide(10, 20)).toBe(0.5);
  });

  test('4 / 2 expected to be 2', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
  });
});

describe('multiply', () => {
  test('0 * 1 expected to be 0', () => {
    expect(calculator.multiply(0, 1)).toBe(0);
  });

  test('10 * 20 expected to be 200', () => {
    expect(calculator.multiply(10, 20)).toBe(200);
  });

  test('-10 * 20 expected to be -200', () => {
    expect(calculator.multiply(-10, 20)).toBe(-200);
  });
});