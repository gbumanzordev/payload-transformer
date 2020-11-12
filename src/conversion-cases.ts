import { toCamelCase, toKebabCase, toPascalCase, toSnakeCase } from './cases';
import { memoize } from './utils/memoize';

export const _camelCase = memoize(toCamelCase);
export const _snakeCase = memoize(toSnakeCase);
export const _kebabCase = memoize(toKebabCase);
export const _pascalCase = memoize(toPascalCase);
