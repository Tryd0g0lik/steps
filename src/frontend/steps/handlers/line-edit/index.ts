// src\frontend\steps\handlers\line-edit\index.ts

export default (event) => {
  console.log(`[LINE-EDIT]: `, event);
  const lineKey = event.target.dataset.key;
  console.log(`[LINE-EDIT]: before localStorage a LINEkEY:`, lineKey);
  const lStorage = localStorage.getItem('heandlersData') as string;
  console.log(`[LINE-EDIT]: after localStorage getItem a string:`, lStorage);
  const lStorageJSON = JSON.parse(lStorage);
  console.log(`[LINE-EDIT]: localStorage a object:`, lStorageJSON);
  const form = <HTMLFormElement>document.querySelector('form.form');
  const inputDate = <HTMLInputElement>document.querySelector('.form .interiorBlock input[name="date"]');
  console.log(`[LINE-EDIT]: querySelector DATE: `, inputDate.textContent);
  const inputDistanc = <HTMLInputElement>document.querySelector('.form .interiorBlock input[name="distanc"]');
  console.log(`[LINE-EDIT]: querySelector DISTENC: `, inputDistanc.textContent);
  const positionDate = lStorageJSON[lineKey]
  console.log(`[LINE-EDIT]: positionDate from LocalSorage: `, JSON.stringify(positionDate));
  form.dataset['key'] = lineKey;
  inputDate.value = positionDate['date'];
  inputDistanc.value = positionDate['distance']

}
