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
      /* When is a add */

      console.log(`[new formSourceData]: `)
      const ev = (event as React.FormEvent<HTMLFormElement>);
      const formSourceData = new FormData(ev.target as HTMLFormElement);

      console.log(`[new formSourceData]: formSourceData.get`);
      let date = (formSourceData.get("date") as string).slice(0);
      console.log(`[new FormData]: formSourceData.distanc`);
      let distance = (formSourceData.get("distanc") as string).slice(0);
      console.log(`[new FormData]: reset`);


      const formDatakey = (ev.target as HTMLFormElement).dataset['key'];
      (formDatakey as string).length < 5 ? (
        pageLoder({ 'insert': [{ 'date': date, 'distance': distance }] })
      ) : (
          pageLoder({ 'edit': [{ key: formDatakey, "distance": distance }] })

      );

      /* '<form class="form" data-key="...">' Reset the 'data-key' and form field  */
      const form = document.querySelector('form.form') as HTMLFormElement;
      console.log('[formCurrentData]: FORM: ', form);
      form.dataset.key = '';
      ev.currentTarget.reset();

      return newRecordAdd();
    } catch (err) {
      /* When is a delete */
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
      <form className="form" data-key='' onSubmit={handlePress as React.FormEventHandler<HTMLFormElement>} >
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
      <div className="feature" onClick={(e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLElement> | EventTarget) => {
      // const etargetStr = String(e.target);
        return handlePress(e as React.FormEvent<HTMLFormElement>);
      }}>

      {records}
        {/* <TrainFC /> */}
      </div>
    </>
  );
}