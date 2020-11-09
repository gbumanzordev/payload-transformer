import { camelCase, snakeCase, kebabCase } from 'lodash';

const conversionTypes = {
  camelCase,
  snakeCase,
  kebabCase,
};

type PayloadConversionType = 'camelCase' | 'snakeCase' | 'kebabCase';

export const validateObject = (testObject: unknown): boolean => {
  return (
    testObject === Object(testObject) &&
    !Array.isArray(testObject) &&
    typeof testObject !== 'function'
  );
};

export const convertPayloadKeys = (
  payload: unknown,
  type: PayloadConversionType = 'camelCase'
): unknown => {
  if (validateObject(payload)) {
    const newObject = {};
    Object.keys(payload as object).forEach((key) => {
      const convertedKey = conversionTypes[type](key) as string;
      newObject[convertedKey] = convertPayloadKeys(payload[key], type);
    });
    return newObject;
  } else if (Array.isArray(payload)) {
    return payload.map((item) => {
      return convertPayloadKeys(item, type);
    });
  }
  return payload;
};
