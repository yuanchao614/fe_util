// 获取给定值所占百分比
export function getPercent(min: number, max: number, value: number): number {
  return ((value - min) / (max - min)) * 100;
}

// 获取精确到几位
export function getPrecision(num: number): number {
  const numStr = num.toString();
  const dotIndex = numStr.indexOf('.');
  return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0; 
}

// 判断是否为有限数值
export function isNumberFinite(value: any): boolean {
  return typeof value === 'number' && isFinite(value);
}

/**
 * 返回保留多少位的结果
 * @param value 
 * @param decimal 
 */
export function toDecimal(value: number, decimal: number): number {
  return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}




