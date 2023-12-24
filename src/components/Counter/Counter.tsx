import React, { useId } from "react";
import InputFC from "./Inputs.tsx";
import ButtonFC from "../Buttons.tsx";
export default function CounterFC(): React.JSX.Element {
  const uniqueInputId = useId();

  function handleInput(event: React.MouseEventHandler<HTMLButtonElement>): void {
    console.log(`INPUT: = ${event.target.value}`);
  }
  return (
    // <form className="form" onSubmit={handleSubmit}></form>
    <form className="form" >
      <div className="menu">
        {/* <input name="date" type="date" value={form.date} onChange={handleChange} required /> */}

        <InputFC inputId={uniqueInputId + "date"} header={"Дата (ДД.ММ.ГГ)"} inputType={"date"} inputName={"date"} />

        {/* <input name="distanc" type="number" value={form.distanc} onChange={handleChange} required /> */}

        <InputFC inputId={uniqueInputId + "distance"}
          header={"Пройдено км"}
          inputType={"number"}
          inputName={"distanc"}
          handleClick={handleInput}
        />

        <div className="blockOk">
          <ButtonFC header={"Ok"} />
        </div>

      </div>
    </form>
  );
}
