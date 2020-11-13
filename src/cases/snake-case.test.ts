import { toSnakeCase } from './snake-case';

describe('toSnakeCase', () => {
  it('should confirm that snakeCase method works', () => {
    expect(toSnakeCase('snakeCasePayload')).toEqual('snake_case_payload');
    expect(toSnakeCase('SnakeCasePayload')).toEqual('snake_case_payload');
    expect(toSnakeCase('snake-case-payload')).toEqual('snake_case_payload');
  });
});
