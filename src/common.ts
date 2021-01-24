/**
 * 判断是否是浏览器环境
 */
export const isBrowser = typeof window !== 'undefined';

/**
 * 判断是否是function
 * @param val 
 */
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

/**
 * 
 * @param val 判断是否是object
 */
export function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object';
}

/**
 * 
 * @param val 判断是否是Promise
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

