
const pageLoder = require("./pageLoder/index.ts");


document.addEventListener('DOMContentLoaded', () => {

  if (navigator && navigator.onLine) {
    pageLoder({ open: [{ steps: [] }] });
  }

});

