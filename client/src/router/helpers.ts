export const startsWithLocaleWithoutSlash = (
  path: string,
  availableLocales: string[]
): boolean => {
  let result = false

  availableLocales.forEach((locale) => {
    if (path.startsWith('/' + locale) && path.endsWith(locale)) result = true
  })

  return result
}
