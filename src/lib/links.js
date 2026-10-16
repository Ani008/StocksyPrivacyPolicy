// Where the two buttons on the landing page lead.
//
// WEB_APP_URL is the Stocksy PWA, hosted as its own Cloudflare Pages project.
// Override it per environment (e.g. a Pages preview of the PWA) with
// VITE_APP_URL in a .env file or in the Pages project's build variables.
export const WEB_APP_URL =
  import.meta.env.VITE_APP_URL || 'https://app.stocksy.online';

// Android package id comes from the Expo app config (android.package).
export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.stocksy.app';

export const PRIVACY_PATH = '/privacy';
export const SUPPORT_EMAIL = 'support@stocksy.online';
