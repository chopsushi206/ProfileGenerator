const Intern = require('../lib/Intern');

test('Can set school via constructor', () => {
  const testValue = 'UCLA';
  const i = new Intern('Foo', 1, 'test@test.com', testValue);
  expect(i.school).toBe(testValue);
});

test('getRole() should return \"Intern\"', () => {
  const testValue = 'Intern';
  const i = new Intern('Foo', 1, 'test@test.com', 'UCLA');
  expect(i.getRole()).toBe(testValue);
});

test('Can get school via getSchool()', () => {
  const testValue = 'U of W';
  const i = new Intern('Foo', 1, 'test@test.com', testValue);
  expect(i.getSchool()).toBe(testValue);
});