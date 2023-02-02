import { nextTick, WritableComputedRef } from 'vue'

export {}

export const SUPPORT_LOCALES = ['en', 'ru']

export function setI18nLanguage(newLocale: string) {
  locale.value = newLocale

  document.querySelector('html')!.setAttribute('lang', newLocale)
}

export async function loadLocaleMessages(locale: string) {
  const messages = await import(`./locales/${locale}.json`)

  setLocaleMessage(locale, messages.default)

  return nextTick()
}
