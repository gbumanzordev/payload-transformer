import { toCamelCase } from './camel-case';

describe('toCamelCase', () => {
  it('camelCase custom method', () => {
    expect(toCamelCase('ThisIsAString')).toEqual('thisIsAString');
    expect(toCamelCase('this_is_a_string')).toEqual('thisIsAString');
    expect(toCamelCase('key_number_one')).toEqual('keyNumberOne');
    expect(toCamelCase('key-number-two')).toEqual('keyNumberTwo');
    expect(toCamelCase('thisIsAString')).toEqual('thisIsAString');
  });
});
