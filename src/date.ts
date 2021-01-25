/**
 * 返回前day天的日期2020-09-16 (if current date is 2020-10-06)
 * @param day 
 */
export function daysAgo(day: number): string {
  let d = new Date();
  d.setDate(d.getDate() - Math.abs(day));
  return d.toISOString().split('T')[0];
}

/**
 * 返回从今天起后day天的日期
 * @param day 
 */
export function daysFromNow(day: number): string {
  let d = new Date();
  d.setDate(d.getDate() + Math.abs(day));
  return d.toISOString().split('T')[0];
}

/**
 * 返回今天是星期几
 * @param date 
 * @param locale 
 */
export function dayName(date: unknown, locale = undefined) {
  if (date instanceof Date) {
    date.toLocaleDateString(locale, { weekday: 'long' });
  }
}