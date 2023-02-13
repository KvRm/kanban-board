import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'

export const i18n = createI18n<false>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
  },
  silentTranslationWarn: true,
  silentFallbackWarn: true,
})
