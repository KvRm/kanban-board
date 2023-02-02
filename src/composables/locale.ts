import { nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { i18n } from '../main'

export function setI18nLanguage(newLocale: string) {
  const router = useRouter()

  i18n.global.locale.value = newLocale

  document.querySelector('html')!.setAttribute('lang', newLocale)
}

export async function loadLocaleMessages(locale: string) {
  const messages = await import(`../locales/${locale}.json`)

  i18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}
