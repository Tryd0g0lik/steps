
const pageLoder = require("./pageLoder/index.ts");
// const Pulisher = require("./piblisher-data/index.ts");
// const publisher = new Pulisher()
// let timeout: number = 1200;

document.addEventListener('DOMContentLoaded', () => {

  if (navigator && navigator.onLine) {
    pageLoder({ open: [{ steps: [] }] });
  }
  // dataLStoorageGet(timeout);

});

// module.exports = async function dataLStoorageGet(timeout: number) { //FunctionStringCallback


//   let result: (string | {} | Record<string, Record<string, string>>) = '';
//   const resp = publisher.dataGetForPublish;
//   console.log(`[dataLStoorageGet]: publisher.publish: ${resp}`);

//   result = resp === false ? (
//     {}
//   ) : (
//       resp
//   );
//   // console.log('[dataLStoorageGet]: HTML', htmlLisRecords);
//   console.log('[dataLStoorageGet]: ', result)
// }
