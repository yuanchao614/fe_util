import { trim, isObject } from './common'
import { toCamelCase } from './format'
/**
 * 检查HTMLElement上是否存在相应的class
 * @param el 
 * @param cls 
 */
export function hasClass(el: HTMLElement, cls: string): boolean {
    if (!el || !cls) return false
    if (cls.indexOf(' ') !== -1)
        throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
}

/**
 * HTMLElement上添加class
 * @param el 
 * @param cls 
 */
export function addClass(el: HTMLElement, cls: string): void {
    if (!el) return
    let curClass = el.className
    const classes = (cls || '').split(' ')

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i]
        if (!clsName) continue

        if (el.classList) {
            el.classList.add(clsName)
        } else if (!hasClass(el, clsName)) {
            curClass += ' ' + clsName
        }
    }
    if (!el.classList) {
        el.className = curClass
    }
}

/**
 * 删除HTMLElement上的class
 * @param el 
 * @param cls 
 */
export function removeClass(el: HTMLElement, cls: string): void {
    if (!el || !cls) return
    const classes = cls.split(' ')
    let curClass = ' ' + el.className + ' '
  
    for (let i = 0, j = classes.length; i < j; i++) {
      const clsName = classes[i]
      if (!clsName) continue
  
      if (el.classList) {
        el.classList.remove(clsName)
      } else if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    }
    if (!el.classList) {
      el.className = trim(curClass)
    }
  }

  /**
   * 获取style
   * @param element 
   * @param styleName 
   */
  export function getStyle(
    element: HTMLElement,
    styleName: string,
  ): string {
    if (!element || !styleName) { return null; }
    styleName = toCamelCase(styleName);
    if (styleName === 'float') {
      styleName = 'cssFloat';
    }
    try {
      const style = element.style[styleName];
      if (style) { return style; }
      const computed = document.defaultView.getComputedStyle(element, '');
      return computed ? computed[styleName] : '';
    } catch (e) {
      return element.style[styleName];
    }
  }

  /**
   * 设置style
   * @param element 
   * @param styleName 
   * @param value 
   */
  export function setStyle(
    element: HTMLElement,
    styleName: CSSStyleDeclaration | string,
    value?: string,
  ): void {
    if (!element || !styleName) { return; }
    if (isObject(styleName)) {
      Object.keys(styleName).forEach(prop => {
          setStyle(element, prop, styleName[prop]);
      })
    } else {
      styleName = toCamelCase(styleName);
      element.style[styleName] = value;
    }
  }

  /**
   * 移除指定style
   * @param element 
   * @param style 
   */
  export function removeStyle(element: HTMLElement, style: CSSStyleDeclaration | string): void {
    if (!element || !style) { return; }
  
    if (isObject(style)) {
      Object.keys(style).forEach(prop => {
        setStyle(element, prop, '');
      })
    } else {
      setStyle(element, style, '');
    }
  }