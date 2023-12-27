import pageLoder from "./pageLoder/index.ts";

console.log("[frontend-STEPS]: ");
document.addEventListener('DOMContentLoaded', () => {
  console.log("[frontend-STEPS]: start");
  if (navigator && navigator.onLine) {
    console.log('[steps]: the DomComtentLoader sending data;');
    pageLoder();
  }
});
