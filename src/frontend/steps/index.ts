
const pageLoder = require("./pageLoder/index.ts");

console.log("[frontend-STEPS]: ");
document.addEventListener('DOMContentLoaded', () => {


  console.log("[frontend-STEPS]: start");
  if (navigator && navigator.onLine) {
    console.log('[steps]: the DomComtentLoader sending data;');
    pageLoder({ open: [{ steps: [] }] });
  }



});

// const counterFormData = (event: any) => {
//   const formData = new FormData(event.target as HTMLFormElement);
//   const date = formData.get("date") as string;
//   const distance = formData.get("distanc") as string;
//   console.log(date, distance);
// }

// const getFormFromPage = () => {
//   if (!document.querySelector('form.form')) {
//     setTimeout(getFormFromPage, 200);

//   } else {
//     return (document.querySelector('form.form') as HTMLFormElement).addEventListener('mouseup', (event: any) => {
//       // if (event.target)
//       event.preventDefault();

//       console.log(`event SIBMIMT: ${Object.keys(event.currentTarget)}`);
//     })
//   }

// }
