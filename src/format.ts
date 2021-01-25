/**
 * 短横线转驼峰
 * @param str 
 * @param upperCaseFirst 
 */
export function toCamelCase(str: string, upperCaseFirst?: boolean): string {
  str = (str || '').toLowerCase().replace(/-(.)/g, function (match, group1) {
      return group1.toUpperCase();
  });

  if (upperCaseFirst && str) {
      str = str.charAt(0).toUpperCase() + str.slice(1);
  }

  return str;
}

/**
 * 首字母转大写
 * @param str 
 */
export function capitalFirst(str: string): string {
  return str ? str.charAt(0).toUpperCase() + str.substr(1) : str;
}
