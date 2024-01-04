import React, { useId } from "react";
import handlerDelte from "../../steps/handlers/line-correct/index.ts";
// import InputFC from "../Counter/Inputs.tsx";
// const uniqueRecordId = useId();


/**
 * This is a function component. It's has been field a date, field the distance and two buttons 
 * @param `{obj}': for a entry point. It's a JSON type the string.
 * @returns React component.
 */
export default function ListRecords({ obj }: any): any {
  const o = JSON.parse(obj);
  const objKey = Object.keys(o);
  const objValu = Object.values(o);
  const edit = "🖉";
  const delet = "✗";


  return (
    objKey.map((keyRecord: string) => (
      < ul className="content" key={keyRecord} >
        <li>{o[keyRecord]['date']}</li>
        <li data-testid='distance'>{o[keyRecord]['distance']}</li>
        <li>
          <button type={'submit'} data-key={`${keyRecord}`} data-name={'delete'} onClick={handlerDelte}>{delet}</button> </li>
        <li>
          <button data-key={`${keyRecord}`} data-name={'edit'} onClick={() => { }}>{edit}</button>
        </li>
      </ul >
    ))
  )
}
