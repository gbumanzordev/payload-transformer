import { convertPayloadKeys } from './payload-transformer';
import {
  convertedPascalCase,
  createCamelCaseObject,
  createSnakeCaseObject,
  nestedPascalObject,
} from './utils/test-data';
import { validateObject } from './validations/validate-object';

describe('convertPayloadKeys', () => {
  it('should validateObject function successfully', () => {
    const testFn = () => 'Hello world';
    const testArray = ['John', 'Doe'];
    const testObject = { name: 'John', lastName: 'Doe' };

    expect(validateObject(testFn)).toBe(false);
    expect(validateObject(testArray)).toBe(false);
    expect(validateObject(testObject)).toBeTruthy();
  });

  it('should validate convertPayloadFunction successfully', () => {
    const previousPayload = { first_name: 'John', last_name: 'Doe' };
    const transformedPayload = convertPayloadKeys(
      previousPayload,
      [],
      'camelCase'
    );
    const pascalCase = convertPayloadKeys(nestedPascalObject, [], 'pascalCase');

    const stringConverted = convertPayloadKeys('string', [], 'camelCase');
    const objectConverted = convertPayloadKeys({}, [], 'snakeCase');
    const numberConverted = convertPayloadKeys(123456, [], 'snakeCase');

    expect(stringConverted).toBeTruthy();
    expect(stringConverted).toEqual('string');

    expect(objectConverted).toBeTruthy();
    expect(objectConverted).toEqual({});

    expect(numberConverted).toBeTruthy();
    expect(numberConverted).toEqual(123456);

    expect(transformedPayload).toEqual({ firstName: 'John', lastName: 'Doe' });

    expect(
      convertPayloadKeys({ another_snake_case: 'Key' }, [], 'camelCase')
    ).toEqual({ anotherSnakeCase: 'Key' });

    expect(convertPayloadKeys(previousPayload, [], 'snakeCase')).toEqual(
      previousPayload
    );

    expect(convertPayloadKeys(previousPayload, ['last-name'], 'kebabCase')).toEqual({
      'first-name': 'John',
    });

    expect(pascalCase).toEqual(convertedPascalCase);
  });

  it('should also convert nested objects keys ', () => {
    expect(convertPayloadKeys(createSnakeCaseObject())).toEqual(
      createCamelCaseObject()
    );
    expect(
      convertPayloadKeys(createSnakeCaseObject(), [], 'snakeCase')
    ).toEqual(createSnakeCaseObject());

    expect(convertPayloadKeys(createSnakeCaseObject(7))).toEqual(
      createCamelCaseObject(7)
    );
    expect(
      convertPayloadKeys(createSnakeCaseObject(7), [], 'snakeCase')
    ).toEqual(createSnakeCaseObject(7));
  });
});
