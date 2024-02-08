import { AppLauncher } from '@capacitor/app-launcher';

(async function () {
  // Check if link is saved in local storage
  if (localStorage.getItem('link')) {
    return AppLauncher.openUrl({ url: `tg://join?invite=${localStorage.getItem('link')}` });
  }
})();