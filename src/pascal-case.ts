import { camelCase } from 'lodash';
import { memoize } from './memoize';

const _camelCase = memoize(camelCase);

export const pascalCase = (key: string): string => {
  const camelCased = _camelCase(key) as string;
  return `${camelCased.slice(0, 1).toUpperCase()}${camelCased.slice(1)}`;
};
