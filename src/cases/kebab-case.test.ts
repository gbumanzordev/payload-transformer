import { toKebabCase } from './kebab-case';

describe('toKebabCase', () => {
  it('should test that toKebabCase works', () => {
    expect(toKebabCase('snake_case_pld')).toEqual('snake-case-pld');
    expect(toKebabCase('snakeCasePld')).toEqual('snake-case-pld');
    expect(toKebabCase('SnakeCasePld')).toEqual('snake-case-pld');
    expect(toKebabCase('camelCaseWithALetterTogether')).toEqual(
      'camel-case-with-a-letter-together'
    );
  });
});
