import React, { useId } from "react";
// import InputFC from "../Counter/Inputs.tsx";
// const uniqueRecordId = useId();

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
        <li>{o[keyRecord]['distance']}</li>
        <li>
          <button onClick={() => { }}>{delet}</button> </li>
        <li>
          <button onClick={() => { }}>{edit}</button> </li>

      </ul >
    ))
  )
}
