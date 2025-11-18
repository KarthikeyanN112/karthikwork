// serviceWorkerRegistration.js
import { registerSW } from 'virtual:pwa-register';

export const updateSW = registerSW({
  onNeedRefresh() {
    console.log("New update available! Refresh to update.");
  },
  onOfflineReady() {
    console.log("App ready to work offline.");
  }
});
