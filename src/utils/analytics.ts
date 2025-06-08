// Analytics utilities for Google Analytics

// Track a page view
export const trackPageview = (url: string = window.location.pathname) => {
  if (window.gtag) {
    window.gtag("event", "page_view", { page_path: url });
  }
};

// Track a specific event
export const trackEvent = (
  action: string,
  params?: Record<string, unknown>,
) => {
  if (window.gtag) {
    window.gtag("event", action, params);
  }
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
