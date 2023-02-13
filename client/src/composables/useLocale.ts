import { computed, nextTick } from 'vue'
import { i18n } from '../plugins/i18n'
import router from '../router'

const localeRoute = computed<string>(
  () => `/${router.currentRoute.value.params.locale as string}`
)

export const useLocale = () => {
  async function loadLocaleMessages(newLocale: string) {
    try {
      const messages = await import(`../locales/${newLocale}.json`)

      document.querySelector('html')!.setAttribute('lang', newLocale)

      i18n.global.setLocaleMessage(newLocale, messages.default)

      return nextTick()
    } catch (e) {
      console.log(e)
    }
  }

  return { localeRoute, loadLocaleMessages }
}
