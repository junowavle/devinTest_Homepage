/// <reference types="vite/client" />

// Environment variables type declarations for Vite
interface ImportMetaEnv {
  // Backend API URL for GraphQL endpoint
  readonly VITE_API_URL: string
  // Node environment (development/production)
  readonly VITE_NODE_ENV: string
  // Application name
  readonly VITE_APP_NAME: string
}

// Extend ImportMeta interface
interface ImportMeta {
  readonly env: ImportMetaEnv
}
