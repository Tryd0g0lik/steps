import React, { useId } from "react";
import InputFC from "./Inputs.tsx";
import ButtonFC from "../Buttons.tsx";
export default function CounterFC(): React.JSX.Element {
  const uniqueInputId = useId();

  const handleInput = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const date = formData.get("date");
    const distanc = formData.get("distanc");
    console.log(date, distanc);
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
          <ButtonFC header={"Ok"} />
        </div>

      </div>
    </form>
  );
}
