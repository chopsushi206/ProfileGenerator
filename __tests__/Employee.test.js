const Employee = require('../lib/Employee');

test('Can instantiate Employee instance', () => {
  const i = new Employee();
  expect(typeof(i)).toBe('object');
});

test('Can set name via constructor arguments', () => {
  const name = 'Foo';
  const i = new Employee(name);
  expect(i.name).toBe(name);
});

test('Can set id via constructor argument', () => {
  const testValue = 100;
  const i = new Employee('Foo', testValue);
  expect(i.id).toBe(testValue);
});

test('Can set email via constructor argument', () => {
  const testValue = 'test@test.com';
  const i = new Employee('Foo', 1, testValue);
  expect(i.email).toBe(testValue);
});

test('Can get name via getName()', () => {
  const testValue = 'Foo';
  const i = new Employee(testValue);
  expect(i.getName()).toBe(testValue);
});

test('Can get id via getId()', () => {
  const testValue = 100;
  const i = new Employee('Foo', testValue);
  expect(i.getId()).toBe(testValue);
});

test('Can get email via getEmail()', () => {
  const testValue = 'test@test.com';
  const i = new Employee('Foo', 1, testValue);
  expect(i.getEmail()).toBe(testValue);
});

test('getRole() should return \"Employee\"', () => {
  const testValue = 'Employee';
  const i = new Employee('Foo', 1, 'test@test.com');
  expect(i.getRole()).toBe(testValue);
});
