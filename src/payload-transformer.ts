import {
  camelCase,
  kebabCase,
  pascalCase,
  snakeCase,
} from './cases/conversion-cases';
import { validateObject } from './validations/validate-object';

const conversionTypes = {
  camelCase,
  snakeCase,
  kebabCase,
  pascalCase,
};

type PayloadConversionType =
  | 'camelCase'
  | 'snakeCase'
  | 'kebabCase'
  | 'pascalCase';

export const convertPayloadKeys = (
  payload: unknown | object,
  excludedKeys: string[] = [],
  type: PayloadConversionType = 'camelCase'
): unknown => {
  if (validateObject(payload)) {
    const newObject = {};
    Object.keys(payload).forEach((key) => {
      const convertedKey = conversionTypes[type](key) as string;
      if (!excludedKeys.includes(convertedKey)) {
        newObject[convertedKey] = convertPayloadKeys(
          payload[key],
          excludedKeys,
          type
        );
      }
    });
    return newObject;
  } else if (Array.isArray(payload)) {
    return payload.map((item) => {
      return convertPayloadKeys(item, excludedKeys, type);
    });
  }
  return payload;
};

export const converPayloadKeysAsync = async (
  payload: unknown | object,
  excludedKeys: string[] = [],
  type: PayloadConversionType = 'camelCase'
) => await convertPayloadKeys(payload, excludedKeys, type);
