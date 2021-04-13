const Manager = require('../lib/Manager');

test('Can set office number via constructor argument', () => {
  const testValue = 100;
  const i = new Manager('Foo', 1, 'test@test.com', testValue);
  expect(i.officeNumber).toBe(testValue);
});

test('getRole() should return \"Manager\"', () => {
  const testValue = 'Manager';
  const i = new Manager('Foo', 1, 'test@test.com', 100);
  expect(i.getRole()).toBe(testValue);
});

test('Can get office number via getOffice()', () => {
  const testValue = 100;
  const i = new Manager('Foo', 1, 'test@test.com', testValue);
  expect(i.getOfficeNumber()).toBe(testValue);
});