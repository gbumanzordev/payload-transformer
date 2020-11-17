export const validateObject = (testObject: unknown): boolean => {
  return (
    testObject === Object(testObject) &&
    !Array.isArray(testObject) &&
    typeof testObject !== 'function'
  );
};
