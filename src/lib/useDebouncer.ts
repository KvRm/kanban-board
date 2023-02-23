export const useDebouncer = (cb: Function, delay: number) => {
  let timeoutId: number

  return () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      cb()
    }, delay)
  }
}
