// src/variant.js
export function getInitialVariant() {
  // If a variant is set by the HTML (e.g. dfy.html), use that
  if (typeof window !== "undefined" && window.__VARIANT__) {
    return window.__VARIANT__;
  }

  // Otherwise check the URL (?v=dfy etc.)
  const params = new URLSearchParams(window.location.search);
  return params.get("v") || "dfy"; // default = dfy
}
