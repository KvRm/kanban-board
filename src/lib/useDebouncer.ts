import { VoidEmptyFunction } from '../types/common'

export const useDebouncer = (cb: any, delay: number): VoidEmptyFunction => {
  let timeoutId: NodeJS.Timeout

  return () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      cb()
    }, delay)
  }
}
