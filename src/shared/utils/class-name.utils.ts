/**
 * @description `cn` (аббревиатура `classNames`) используется для удобной компоновки классов в компоненте.
 * Получает перечень названий классов и исключает любые `false` значения.
 * @example
 * <div className={c(classes.class1, isShow && classes.show, classes.class2)}></div>
 * // Результат (isShow = false): className="class1 class2"
 * // Результат (isShow = true): className="class1 show class2"
 * @example
 * // Чтобы не писать так
 * <div className={`${classes.class1} ${isShow ? classes.show : ''} ${classes.class2}`}></div>
 */
export function cn(...classNames: (any | string)[]): string {
  return classNames.filter(Boolean).join(' ');
}
