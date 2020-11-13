import { memoize } from '../utils/memoize';
import { toCamelCase } from './camel-case';

const camelCase = memoize(toCamelCase);

export const toPascalCase = (keyValue: string): string => {
  const camelCased = camelCase(keyValue) as string;
  return `${camelCased.slice(0, 1).toUpperCase()}${camelCased.slice(1)}`;
};
