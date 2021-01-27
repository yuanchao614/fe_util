/**
 * 判断是否是浏览器环境
 */
export const isBrowser = typeof window !== 'undefined';

/**
 * Object.prototype.toString.call(value) 用于精确判断value的类型
 */
export const objectToString = Object.prototype.toString;

export const toTypeString = (value: unknown): string => objectToString.call(value)

/**
 * 判断是否是function
 * @param val 
 */
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

/**
 * 判断是否是object
 * @param val
 */
export function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object';
}

/**
 * 判断是否是Promise
 * @param val
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

/**
 * 判断是否是Date类型
 * @param val
 */

export function isDate(val: unknown): val is Date {
  return val instanceof Date
}

/**
 * 判断是否是string
 * @param val 
 */
export function isString(val: unknown): val is string {
  return typeof val === 'string';
}

/**
 * 判断是否是symbol
 * @param val 
 */
export function isSymbol(val: unknown): val is symbol {
  return typeof val === 'symbol';
}

/**
 * 判断是否是number
 * @param val
 */

export function isNumber(val: unknown): val is number {
  return typeof val === 'number';
}

/**
 * 判断是否是map
 * @param val
 */

export function isMap(val: unknown): val is Map<any, any> {
  return toTypeString(val) === '[object Map]';
}

/**
 * 判断是否是set
 * @param val 
 */
export function isSet(val: unknown): val is Set<any> {
  return toTypeString(val) === '[object Set]';
}

/** 
 * 去除字符串前后空格
*/
export const trim = function (s: string) {
  return (s || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}
