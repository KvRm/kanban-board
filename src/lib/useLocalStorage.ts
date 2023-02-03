export enum LocalStorageKeys {
  Theme = 'theme',
  Locale = 'locale',
}

export const useLocalStorage = () => {
  const set = (key: LocalStorageKeys, value: string): void => {
    window.localStorage.setItem(key, value)
  }

  const get = (key: LocalStorageKeys): string =>
    window.localStorage.getItem(key) as string

  const remove = (key: LocalStorageKeys): void => {
    window.localStorage.removeItem(key)
  }

  return { set, get, remove }
}
