import { toSnakeCase } from './snake-case';

test('snakeCase method should work', () => {
  expect(toSnakeCase('snakeCasePayload')).toEqual('snake_case_payload');
  expect(toSnakeCase('SnakeCasePayload')).toEqual('snake_case_payload');
  expect(toSnakeCase('snake-case-payload')).toEqual('snake_case_payload');
});
