import React, { useId } from "react";
import InputFC from "./Input.tsx";
import ButtonFC from "../Buttons.tsx";
export default function CounterFC() {
  const uniqueInputId = useId();

  return (
    // <form className="form" onSubmit={handleSubmit}></form>
    <form className="form" >
      <div className="menu">
        {/* <input name="date" type="date" value={form.date} onChange={handleChange} required /> */}
        <InputFC inputId={uniqueInputId + 'date'} header={"Дата (ДД.ММ.ГГ)"} inputType={"date"} inputName={"date"} />

        {/* <input name="distanc" type="number" value={form.distanc} onChange={handleChange} required /> */}
        <InputFC inputId={uniqueInputId + 'distance'} header={"Пройдено км"} inputType={"number"} inputName={"distanc"} />

        <div className="blockOk">
          <ButtonFC header={"Ok"} />
        </div>

      </div>
    </form>
  )

}
