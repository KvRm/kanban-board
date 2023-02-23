/// <reference types="vite/client" />
declare module '*.vue'

interface ImportMetaEnv {
  readonly VITE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
