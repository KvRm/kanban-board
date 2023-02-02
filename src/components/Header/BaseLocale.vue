<template>
  <button @click="setI18nLanguage(locale)">{{ msg }}</button>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRoute } from 'vue-router'
  import { setI18nLanguage } from '../../composables/locale'

  const i18n = useI18n()
  const route = useRoute()
  type LocaleType = 'en' | 'ru'
  const currentLocale = ref<'en' | 'ru'>((route.params?.locale as LocaleType) || 'en')

  function setLocale() {
    currentLocale.value = currentLocale.value === 'en' ? 'ru' : 'en'

    setI18nLanguage(currentLocale)
  }

  const msg = computed<string>(() => i18n.t('hello'))
</script>
