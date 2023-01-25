import { defineRule } from 'vee-validate'

defineRule('isNotEmpty', (value: string) => {
  if (value || value.length) {
    return true
  }

  return `Это поле не должно быть пустым`
})
