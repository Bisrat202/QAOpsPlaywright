// @ts-check
import { defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
// config is a variable that holds the Playwright test configuration
const config =({
  testDir: './tests',
   timeout: 30000,
    expect: {
     timeout: 10000
   }, 
   reporter: 'html',

   use: {

    browserName: 'Chromium'

    },

  
  });
  module.exports = config;
  // End of Playwright test configuration (Available all across the prodject
   

