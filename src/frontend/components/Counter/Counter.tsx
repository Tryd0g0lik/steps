import React, { useId, useState } from "react";
import InputFC from "./Inputs.tsx";
import ButtonFC from "../Buttons.tsx";
import pageLoder from "../../steps/pageLoder/index.ts";
import TrainFC from "../Training/Train.tsx";
import Publish from "../../steps/publisher-data/index.ts";
const publisher = new Publish();

export default function CounterFC(): React.JSX.Element {
  const uniqueInputId = useId();
  const [records, setRecords] = useState<JSX.Element>(<TrainFC />);

  function newRecordAdd(): void {
    const status = publisher.dataGetForPublish;// localStorage.getItem('heandlersData')
    if ((typeof status).includes("string")) {
      setRecords(<TrainFC />);
      return;
    }
    setTimeout(() => { newRecordAdd(); }, 1200);
  }

  const handlePress = (event: any): void => {
    (event as React.FormEvent<HTMLFormElement> | React.MouseEvent).preventDefault();
    console.log("[FORM: ]");
    try {
      /* When is a add */
      const ev = (event as React.FormEvent<HTMLFormElement>);
      const formSourceData = new FormData(ev.target as HTMLFormElement);

      const date = (formSourceData.get("date") as string).slice(0);
      const distance = (formSourceData.get("distanc") as string).slice(0);

      const formDatakey = (ev.target as HTMLFormElement).dataset.key;
      if (formDatakey !== undefined &&
        formDatakey.length > 10) {
        pageLoder({ edit: [{ key: formDatakey, distance: distance }] });
        /* '<form class="form" data-key="...">' Reset the 'data-key' and form field  */
        const result = document.querySelector("form.form");
        const form: HTMLFormElement = result as HTMLFormElement;
        form.dataset.key = "";
      } else {
        pageLoder({ insert: [{ date: date, distance: distance }] });
      }
      ev.currentTarget.reset();
    } catch (err) {
      /* When is a delete */
      console.warn("[new FormData]: pageLoder errore", err);
    } finally {
      newRecordAdd();
    }
  };

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
      <div className="feature" onClick={(e: React.MouseEvent<HTMLElement>) => {
        const target = (e as React.MouseEvent).target;
        const datasetName = (target as HTMLButtonElement).dataset.name;
        if (datasetName !== undefined && datasetName.includes("delete")) {
          handlePress(e);
        }
      }}>
        {records}
      </div>
    </>
  );
}
