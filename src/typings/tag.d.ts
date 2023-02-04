export type Tag = { type: TagProps['type']; label: string }

enum TagEnum {
  Default = '',
  Success = 'success',
  Info = 'info',
  Danger = 'danger',
  Warning = 'warning',
}
