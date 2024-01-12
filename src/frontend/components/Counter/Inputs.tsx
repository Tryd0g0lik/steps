import React from "react";
import HeaderFC from "../Header.tsx";
import { type Forms } from "../../header-interface.tsx";

/**
 * The entry point is a intarfice's type "Forms"
  * @param header: It's a block title
 * @param param0:
 * @returns block TSX
 */
export default function InputFC({
  header,
  inputName,
  inputType,
  inputId = "0"
}: Forms): React.JSX.Element {
  // const { header } = prop.forms;
  return (
    <div className="block">
      <HeaderFC header={header} />
      <label htmlFor={inputId}>
        <div className="interiorBlock">
          {/* <input name="date" type="date" value={form.date} onChange={handleChange} required /> */}
          <input name={inputName} defaultValue="" id={inputId} type={inputType} required />
        </div>
      </label>
    </div>
  );
}
