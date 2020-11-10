import { camelCase, snakeCase, kebabCase } from 'lodash';
import { pascalCase } from './pascal-case';
import { memoize } from './memoize';

export const _camelCase = memoize(camelCase);
export const _snakeCase = memoize(snakeCase);
export const _kebabCase = memoize(kebabCase);
export const _pascalCase = memoize(pascalCase);
