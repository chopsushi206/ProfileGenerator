const Engineer = require('../lib/Engineer');

test('Can set GitHUb account via constructor', () => {
  const testValue = 'GitHubUser';
  const i = new Engineer('Foo', 1, 'test@test.com', testValue);
  expect(i.github).toBe(testValue);
});

test('getRole() should return \"Engineer\"', () => {
  const testValue = 'Engineer';
  const i = new Engineer('Foo', 1, 'test@test.com', 'GitHubUser');
  expect(i.getRole()).toBe(testValue);
});

test('Can get GitHub username via getGithub()', () => {
  const testValue = 'GitHubUser';
  const i = new Engineer('Foo', 1, 'test@test.com', testValue);
  expect(i.getGithub()).toBe(testValue);
});