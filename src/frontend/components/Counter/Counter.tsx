import React, { useId } from "react";
import InputFC from "./Inputs.tsx";
import ButtonFC from "../Buttons.tsx";
const pageLoder = require("../../steps/pageLoder/index.ts");

export default function CounterFC(): React.JSX.Element {
  const uniqueInputId = useId();

  const handleInput = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const date = formData.get("date") as string;
    const distance = formData.get("distanc") as string;
    console.log(date, distance);
    pageLoder({ 'insert': [{ 'date': date }, { 'distance': distance }] });

    console.log(`event SIBMIMT: ${Object.keys(event.currentTarget)}`);
  };
  return (
    <form className="form" onSubmit={handleInput as React.FormEventHandler<HTMLFormElement>} >
      <div className="menu">
        <InputFC inputId={uniqueInputId + "date"} header={"Дата (ДД.ММ.ГГ)"} inputType={"date"}
          inputName={"date"} />

        <InputFC inputId={uniqueInputId + "distance"}
          header={"Пройдено км"}
          inputType={"number"}
          inputName={"distanc"}
        />

        <div className="blockOk">
          <h2>Отправить</h2>
          <ButtonFC header={"Ok"} />
        </div>

      </div>
    </form>
  );
}
