/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele: HTMLElement, cls: string): boolean {
  return !!ele.className.match(new RegExp(`(\\s|^)${cls}(\\s|$)`))
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele: HTMLElement, cls: string): void {
  if (!hasClass(ele, cls)) ele.className += ` ${cls}`
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele: HTMLElement, cls: string): void {
  if (hasClass(ele, cls)) {
    const reg = new RegExp(`(\\s|^)${cls}(\\s|$)`)
    ele.className = ele.className.replace(reg, ' ')
  }
}

/**
 * 把目标url转换为绝对url，
 * @param target
 */
export function transformOutsideLink(target: string): string {
  const urlPattern = /^https?:\/\//i

  if (urlPattern.test(target)) {
    return target
  } else if (target.indexOf('www') > -1) {
    return `http://${target}`
  }

  // 以相对路径替换原url
  const pathnameArr = location.pathname.split('/')
  let preUrl = location.origin
  for (let i = 0; i < pathnameArr.length - 1; i++) {
    if (pathnameArr[i].indexOf('.html') !== -1) {
      break
    } else {
      preUrl = `${preUrl}/${pathnameArr[i]}`
    }
  }
  return `${preUrl}${target}`
}
