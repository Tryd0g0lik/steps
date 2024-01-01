import React, { useId, useState } from "react";
import InputFC from "./Inputs.tsx";
import ButtonFC from "../Buttons.tsx";
const pageLoder = require("../../steps/pageLoder/index.ts");
import TrainFC from "../Training/Train.tsx";
const Publish = require("../../steps/piblisher-data/index.ts");

let loacalStor = '{}';
if (typeof localStorage.getItem('heandlersData') === 'string') {
  loacalStor = localStorage.getItem('heandlersData') as string;
}


export default function CounterFC() {
  const uniqueInputId = useId();
  // const loacalStorJSON = JSON.parse(loacalStor);
  const [records, setRecords] = useState<JSX.Element>(<TrainFC />);
  const publisher = new Publish();
  const handlePress = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    let date = formData.get("date") as string;
    let distance = formData.get("distanc") as string;
    pageLoder({ 'insert': [{ 'date': date.slice(0), 'distance': distance.slice(0) }] }); 
    event.currentTarget.reset();
    return newRecordAdd();
  };

  function newRecordAdd() {

    let status = publisher.dataGetForPublish;//localStorage.getItem('heandlersData')
    console.log(`[newRecordAdd] STATUS: ${status}`)
    if (typeof status === 'string') { 
      // const bool = loacalStor.indexOf(status) === -1 ? true : false;
      
      // if (bool) {
        loacalStor = status;
      return setRecords(<TrainFC />);

      // } else {
      //   setTimeout(() => { newRecordAdd() }, 1200)
      // }
    }
    console.log(`[newRecordAdd] SETTIM: ${status}`)
    setTimeout(() => { newRecordAdd() }, 1200)
    status = false;
    console.log(`[newRecordAdd] loacalsTOR: ${status}`)
    // return loacalStor
  }

  return (
    <>
      <form className="form" onSubmit={handlePress as React.FormEventHandler<HTMLFormElement>} >
      <div className="menu">
        <InputFC inputId={uniqueInputId + "date"} header={"Дата (ДД.ММ.ГГ)"} inputType={"date"}
          inputName={"date"} />

        <InputFC inputId={uniqueInputId + "distance"}
          header={"Пройдено км."}
          inputType={"number"}
          inputName={"distanc"}
        />

        <div className="blockOk">
          <h2>Отправить</h2>
          <ButtonFC header={"Ok"} />
        </div>

      </div>
      </form>
      {records}
    </>
  );
}
