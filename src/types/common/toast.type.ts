export interface Toast {
  id: number
  text: string
  type: ToastType
}

export type ToastType = 'success' | 'error'
