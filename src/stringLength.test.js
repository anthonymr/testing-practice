const stringLength = require('./stringLength');

test('"hello" lengt to equal 11', () => {
  expect(stringLength('hello')).toBe(5);
});

test('"hello world" is to long', () => {
  expect(() => stringLength('hello world')).toThrow('String to long.');
});

test('"" is to short', () => {
  expect(() => stringLength('')).toThrow('String to short.');
});