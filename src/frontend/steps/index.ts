import pageLoder from "./pageLoder/index.ts";


document.addEventListener('DOMContentLoader', async () => {
  if (navigator && navigator.onLine) {
    console.log('[steps]: the DomComtentLoader sending data;');
    pageLoder();
  }
});
