import { convertPayloadKeys, validateObject } from './payload-transformer';
import {
  convertedPascalCase,
  createCamelCaseObject,
  createSnakeCaseObject,
  nestedPascalObject,
} from './utils/test-data';

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
  const pascalCase = convertPayloadKeys(nestedPascalObject, 'pascalCase');

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

  expect(pascalCase).toEqual(convertedPascalCase);
});

test('nested objects keys should also be converted', () => {
  expect(convertPayloadKeys(createSnakeCaseObject())).toEqual(
    createCamelCaseObject()
  );
  expect(convertPayloadKeys(createSnakeCaseObject(), 'snakeCase')).toEqual(
    createSnakeCaseObject()
  );

  expect(convertPayloadKeys(createSnakeCaseObject(7))).toEqual(
    createCamelCaseObject(7)
  );
  expect(convertPayloadKeys(createSnakeCaseObject(7), 'snakeCase')).toEqual(
    createSnakeCaseObject(7)
  );
});
