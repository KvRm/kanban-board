export enum LocalStorageKeys {
  T = 'T',
}

export const useLocalStorage = () => {
  const set = (KEY: LocalStorageKeys, DATA: string): void => {
    window.localStorage.setItem(KEY, DATA)
  }

  const get = (KEY: LocalStorageKeys): string =>
    window.localStorage.getItem(KEY) as string

  const remove = (KEY: LocalStorageKeys): void => {
    window.localStorage.removeItem(KEY)
  }

  return { set, get, remove }
}
