// src\frontend\steps\handlers\line-edit\index.ts

export default (event: React.MouseEvent): void => {
  console.log("[LINE-EDIT]: ", event);
  const lineKey = (event.target as HTMLInputElement).dataset.key;
  console.log("[LINE-EDIT]: before localStorage a LINEkEY:", lineKey);
  const lStorage = localStorage.getItem("heandlersData");
  console.log("[LINE-EDIT]: after localStorage getItem a string:", lStorage);
  if (lStorage !== null &&
    lineKey !== undefined) {
    const lStorageJSON = JSON.parse(lStorage);
    console.log("[LINE-EDIT]: localStorage a object:", lStorageJSON);
    const form = document.querySelector("form.form");
    const inputDate = (form as HTMLFormElement).querySelector(".interiorBlock input[name='date']");
    console.log("[LINE-EDIT]: querySelector DATE: ", (inputDate as HTMLInputElement).textContent);
    const inputDistanc = (form as HTMLFormElement).querySelector(".interiorBlock input[name='distanc']");
    console.log("[LINE-EDIT]: querySelector DISTENC: ", (inputDistanc as HTMLInputElement).textContent);
    const positionDate = lStorageJSON[lineKey];
    console.log("[LINE-EDIT]: positionDate from LocalSorage: ", JSON.stringify(positionDate));
    (form as HTMLFormElement).dataset["key"] = lineKey;
    (inputDate as HTMLInputElement).value = positionDate.date;
    (inputDistanc as HTMLInputElement).value = positionDate.distance;
  }
};
