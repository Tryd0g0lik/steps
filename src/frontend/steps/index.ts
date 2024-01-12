import pageLoder from "./pageLoder/index.ts";
document.addEventListener("DOMContentLoaded", (): void => {
  if (navigator.onLine) {
    const obj = { open: [{ steps: [] }] };
    pageLoder(obj);
  }
});
