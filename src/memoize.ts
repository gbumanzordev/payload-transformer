export const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const stringifiedArgs = JSON.stringify(args);
    return (cache[stringifiedArgs] =
      typeof cache[stringifiedArgs] === 'undefined'
        ? fn(...args)
        : cache[stringifiedArgs]);
  };
};
