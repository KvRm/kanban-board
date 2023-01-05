export enum LocalStorageKeys {
  'theme-dark' = 'theme-dark',
}

export const useLocalStorage = () => {
  const set = (key: LocalStorageKeys, data: string): void => {
    window.localStorage.setItem(key, data)
  }

  const get = (key: LocalStorageKeys): string =>
    window.localStorage.getItem(key) as string

  const remove = (key: LocalStorageKeys): void => {
    window.localStorage.removeItem(key)
  }

  return { set, get, remove }
}
