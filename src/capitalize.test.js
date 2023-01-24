const capitalize = require('./capitalize');

test('"hello" expected to be "Hello"', () => {
  expect(capitalize('hello')).toBe('Hello');
});