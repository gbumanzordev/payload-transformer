import { toCamelCase, toKebabCase, toPascalCase, toSnakeCase } from './cases';
import { memoize } from './utils/memoize';

export const camelCase = memoize(toCamelCase);
export const snakeCase = memoize(toSnakeCase);
export const kebabCase = memoize(toKebabCase);
export const pascalCase = memoize(toPascalCase);
