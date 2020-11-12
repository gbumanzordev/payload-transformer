export const toSnakeCase = (keyValue: string): string => {
  return keyValue
    .replace(/([A-Z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
};
