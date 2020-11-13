import { toPascalCase } from './pascal-case';

test('pascalCase method should work', () => {
  expect(toPascalCase('snakeCasePayload')).toEqual('SnakeCasePayload');
  expect(toPascalCase('snake_case_payload')).toEqual('SnakeCasePayload');
  expect(toPascalCase('snake-case-payload')).toEqual('SnakeCasePayload');
});
