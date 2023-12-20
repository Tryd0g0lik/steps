import React from "react";
import HeaderFC from "../Header.tsx";
interface Forms {
  header: string;
  inputName: string;
  inputType: string;
  inputId?: string

}
export default function InputFC({
  header,
  inputName,
  inputType,
  inputId = '0',
}: Forms) {

  // const { header } = prop.forms;
  return (
    <div className="block">
      <HeaderFC header={header} />
      <label htmlFor={inputId}>
      <div className="interiorBlock">
        {/* <input name="date" type="date" value={form.date} onChange={handleChange} required /> */}

          <input name={inputName} id={inputId} type={inputType} required />

        </div>
      </label>
    </div>
  )
}
