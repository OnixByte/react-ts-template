/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Backend Base URL
   */
  readonly VITE_BACKEND_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
