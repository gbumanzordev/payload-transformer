import { toPascalCase } from './pascal-case';

describe('toPascalCase', () => {
  it('should confirm that pascalCase method works', () => {
    expect(toPascalCase('snakeCasePayload')).toEqual('SnakeCasePayload');
    expect(toPascalCase('snake_case_payload')).toEqual('SnakeCasePayload');
    expect(toPascalCase('snake-case-payload')).toEqual('SnakeCasePayload');
  });
});
