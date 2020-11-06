import { convertPayloadKeys, validateObject } from './payload-transformer';

test('validateObject function', () => {
  const testFn = () => 'Hello world';
  const testArray = ['John', 'Doe'];
  const testObject = { name: 'John', lastName: 'Doe' };

  expect(validateObject(testFn)).toBe(false);
  expect(validateObject(testArray)).toBe(false);
  expect(validateObject(testObject)).toBeTruthy();
});

test('convertPayloadFunction', () => {
  const previousPayload = { first_name: 'John', last_name: 'Doe' };
  const transformedPayload = convertPayloadKeys(previousPayload, 'camelCase');

  expect(transformedPayload).toEqual({ firstName: 'John', lastName: 'Doe' });

  expect(
    convertPayloadKeys({ another_snake_case: 'Key' }, 'camelCase')
  ).toEqual({ anotherSnakeCase: 'Key' });

  expect(convertPayloadKeys(previousPayload, 'snakeCase')).toEqual(
    previousPayload
  );

  expect(convertPayloadKeys(previousPayload, 'kebabCase')).toEqual({
    'first-name': 'John',
    'last-name': 'Doe',
  });
});
