// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({ 
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    video: {
      mode: 'on',
      size: { width: 1280, height: 720 },
    },
  },
  
  globalTeardown: './move-videos.ts', 

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome'},
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], channel: 'firefox'},
    },
    {
       name: 'Microsoft Edge',
       use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    /* Test against mobile viewports. */
    {
       name: 'Mobile Chrome',
       use: { ...devices['Pixel 5'] },
     },
     {
       name: 'Mobile Safari',
       use: { ...devices['iPhone 12'] },
     },
     
  ],
});
