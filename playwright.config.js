import { defineConfig } from '@playwright/test'

export default defineConfig({
  webServer: {
    command: 'npm run start',
    port: 3001,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:3001/',
  },
})
