// 'ios' | 'android' | 'other' — used only to tailor which button is primary
// and what the Download button says. Nothing is sent anywhere.
export function getPlatform() {
  if (typeof navigator === 'undefined') return 'other';

  const ua = navigator.userAgent || '';
  // iPadOS 13+ reports itself as a Mac; touch support tells them apart.
  const isIPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

  if (/iPhone|iPad|iPod/i.test(ua) || isIPadOS) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'other';
}
