const reverseString = require('./reverseString');

test('"hello" expect to be "olleh"', () => {
  expect(reverseString('hello')).toBe('olleh');
});