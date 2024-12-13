export const getPlatform = () => {
  if (typeof window !== 'undefined') {
    if (window.matchMedia('(display-mode: standalone)').matches) return 'pwa';
    if (navigator.userAgent.includes('Electron')) return 'desktop';
    return 'web';
  }
  return 'server';
}; 