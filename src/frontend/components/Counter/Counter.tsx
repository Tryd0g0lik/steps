import React, { useId, useState } from "react";
import InputFC from "./Inputs.tsx";
import ButtonFC from "../Buttons.tsx";
const pageLoder = require("../../steps/pageLoder/index.ts");
import TrainFC from "../Training/Train.tsx";
const Publish = require("../../steps/publisher-data/index.ts");

let localStor = '{}';
if (typeof localStorage.getItem('heandlersData') === 'string') {
	localStor = localStorage.getItem('heandlersData') as string;
}
const publisher = new Publish();

// <form className="form" onSubmit={handlePress as.. 
// надо чтоб сработала onSubmit при удаленнии
// Publish - ИМЕЕТ  проверку на уникальность, При удалении надо обойти проверку


export default function CounterFC() {
  const uniqueInputId = useId();
  // const loacalStorJSON = JSON.parse(loacalStor);
  const [records, setRecords] = useState<JSX.Element>(<TrainFC />);


  const handlePress = (event: any) => {
    (event as React.FormEvent<HTMLFormElement>).preventDefault();
    console.log('[FORM: ]')
    // console.log(event)
    const elem = (event as React.FormEvent<HTMLElement>).target as HTMLElement;
    const b = elem as HTMLElement
    console.log(b)
    console.log(b.dataset)
    console.log(b.dataset.name)

    console.log()
    try {
      console.log(`[new FormData]: `)
      const ev = (event as React.FormEvent<HTMLFormElement>);
      const formData = new FormData(ev.target as HTMLFormElement);
      console.log(`[new FormData]: formData.get`);
      let date = formData.get("date") as string;
      console.log(`[new FormData]: formData.distanc`);
      let distance = formData.get("distanc") as string;
      console.log(`[new FormData]: reset`);
      ev.currentTarget.reset();
      pageLoder({ 'insert': [{ 'date': date.slice(0), 'distance': distance.slice(0) }] }); 

      return newRecordAdd();
    } catch (err) {
      console.warn(`[new FormData]: pageLoder errore`, err);
      return newRecordAdd();
    }
  };

  function newRecordAdd() {

    let status = publisher.dataGetForPublish;//localStorage.getItem('heandlersData')
    console.log(`[newRecordAdd] STATUS: ${status}`)
    if (typeof status === 'string') { 
      console.log(`[newRecordAdd] STaRT:`)
			localStor = status;
      return setRecords(<TrainFC />);

    }
    console.log(`[newRecordAdd] SETTIM: ${status}`)
    setTimeout(() => { newRecordAdd() }, 1200)
    // status = false;
    // console.log(`[newRecordAdd] localsTOR: ${status}`)
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
      <div className="feature" onClick={(e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLElement>) => {
        console.log('-----------??', e.target)
        return handlePress(e as React.FormEvent<HTMLFormElement>);


      }}>

      {records}
        {/* <TrainFC /> */}
      </div>
    </>
  );
}
