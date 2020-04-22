
/**
 * 
 * @param arr Array or item
 * @param func function on each item
 */
const each = async (arr: any, func: Function) => {
  if (arr === null || arr === undefined) return null;

  if (Array.isArray(arr)) {
    const result = await Promise.all(arr.map(i => func(i)));
    return result;
  }

  return func(arr);
};

export default {
  each,
}
