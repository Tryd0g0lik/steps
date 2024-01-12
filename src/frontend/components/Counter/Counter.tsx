import React, { useId, useState } from "react";
import InputFC from "./Inputs.tsx";
import ButtonFC from "../Buttons.tsx";
import pageLoder from "../../steps/pageLoder/index.ts";
import TrainFC from "../Training/Train.tsx";
import Publish from "../../steps/publisher-data/index.ts";
// let localStor = "{}";
// const result: string | null = localStorage.getItem("heandlersData");
// if (typeof result === "string") {
//   localStor = result;
// }
const publisher = new Publish();

export default function CounterFC(): React.JSX.Element {
  const uniqueInputId = useId();
  const [records, setRecords] = useState<JSX.Element>(<TrainFC />);

  function newRecordAdd(): void {
    const status = publisher.dataGetForPublish;// localStorage.getItem('heandlersData')
    console.log("[newRecordAdd] STATUS: ", status);
    if ((typeof status).includes("string")) {
      console.log("[newRecordAdd] STaRT:");
      // localStor = status;
      setRecords(<TrainFC />);
      return;
    }
    console.log("[newRecordAdd] SETTIM: ", status);
    setTimeout(() => { newRecordAdd(); }, 1200);
    // status = false;
    // console.log(`[newRecordAdd] localsTOR: ${status}`)
    // return loacalStor
  }

  const handlePress = (event: any): void => {
    (event as React.FormEvent<HTMLFormElement> | React.MouseEvent).preventDefault();
    console.log("[FORM: ]");
    // console.log(event)
    const elem = (event as React.FormEvent<HTMLElement> | React.MouseEvent).target as HTMLElement;
    const b = elem;
    console.log(b);
    console.log(b.dataset);
    console.log(b.dataset.name);

    console.log();
    try {
      /* When is a add */
      const ev = (event as React.FormEvent<HTMLFormElement>);
      console.log("[new formSourceData]: target: ", ev.target);
      const formSourceData = new FormData(ev.target as HTMLFormElement);

      console.log("[new formSourceData]: formSourceData.get");
      const date = (formSourceData.get("date") as string).slice(0);
      console.log("[new FormData]: ", "date: ", date, "distanc: ", formSourceData.get("distanc"));
      const distance = (formSourceData.get("distanc") as string).slice(0);
      console.log("[new FormData]: reset");

      const formDatakey = (ev.target as HTMLFormElement).dataset.key;
      // if (formDatakey == null) return;
      console.log("[new FormData]: FORM formDatakey: ", formDatakey);
      if (formDatakey !== undefined &&
        formDatakey.length > 10) {
        pageLoder({ edit: [{ key: formDatakey, distance: distance }] });
        /* '<form class="form" data-key="...">' Reset the 'data-key' and form field  */
        const result = document.querySelector("form.form");
        const form: HTMLFormElement = result as HTMLFormElement;
        console.log("[formCurrentData]: FORM: ", form);
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
        console.log("--------------------------------------- datasetName: ", datasetName);
        if (datasetName !== undefined && datasetName.includes("delete")) {
          handlePress(e);
        }
      }}>

        {records}
        {/* <TrainFC /> */}
      </div>
    </>
  );
}
