
const pageLoder = require("./pageLoder/index.ts");
const Pulisher = require("./piblisher-data/index.ts");
const publisher = new Pulisher()
let timeout: number = 1200;

document.addEventListener('DOMContentLoaded', () => {

  if (navigator && navigator.onLine) {
    pageLoder({ open: [{ steps: [] }] });
  }
  dataLStoorageGet(htmlScaleDataGet, timeout);

});

async function dataLStoorageGet(fun: () => (HTMLCollectionOf<HTMLLIElement> | null), timeout: number) { //FunctionStringCallback
  let html = fun();

  let result: (string | {} | Record<string, Record<string, string>>) = '';
  const resp = publisher.dataGetForPublish;
  console.log(`[dataLStoorageGet]: publisher.publish: ${resp}`);

  result = resp === false ? (
    setTimeout(() => {
      dataLStoorageGet(fun, timeout);
      console.log(`[dataLStoorageGet]: setTimeout`)
    }, timeout),
    {}
  ) : (
    resp
  );

  console.log('[dataLStoorageGet]: ', result)
}

function htmlScaleDataGet(): any { //(HTMLUListElement | undefined | null)
  console.log('[htmlScaleDataGet]: htnl BEFORE')
  const html = <NodeListOf<HTMLLIElement> | null>document.querySelectorAll(".contentBlock ul.content li");
  console.log(`[htmlScaleDataGet]: htnl AFTER: ${html}`)
  return html;
}
