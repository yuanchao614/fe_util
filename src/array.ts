// 转数组
export function toArray<T>(value: T | T[]): T[] {
  let ret: T[];
  if (value == null) {
    ret = [];
  } else if (!Array.isArray(value)) {
    ret = [value];
  } else {
    ret = value;
  }
  return ret;
}

// 判断数组相等

export function arraysEqual<T>(array1: T[], array2: T[]): boolean {
  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }

  const len = array1.length;
  for (let i = 0; i < len; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

// 去除数组重复值

export function deduplicate<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

// 数组打平

export function arrayFlat(arr: unknown[]) {
  return arr.reduce((acm: unknown[], item) => {
    const val = Array.isArray(item) ? arrayFlat(item) : item;
    return acm.concat(val);
  }, []);
}

/**
 * 返回数组中满足条件的值所在index
 * @param arr Array<T>
 * @param pred (arg: T) => boolean
 * arrayFindIndex([1, 2, 3, 4], (item) => item === 3) >> 2
 */

export function arrayFindIndex<T = any>(
  arr: Array<T>,
  pred: (arg: T) => boolean
): number {
  return arr.findIndex(pred);
}

/**
 * 查找数组中满足条件的值
 * @param arr Array<T>
 * @param pred (arg: T) => boolean
 */
export const arrayFind = function <T = any>(
  arr: Array<T>,
  pred: (args: T) => boolean
): any {
  return arr.find(pred);
};
