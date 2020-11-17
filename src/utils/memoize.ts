export const memoize = (functionCall: any) => {
  const cachedFunction = {};
  return (...args: any) => {
    const stringifiedArgs = JSON.stringify(args);
    return (cachedFunction[stringifiedArgs] =
      typeof cachedFunction[stringifiedArgs] === 'undefined'
        ? functionCall(...args)
        : cachedFunction[stringifiedArgs]);
  };
};
