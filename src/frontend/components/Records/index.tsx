import React from "react";



export default function ListRecords({ obj }: any): any {
  const o = JSON.parse(obj);
  const objKey = Object.keys(o);
  const objValu = Object.values(o);
  // console.log('[ListRecords]: obj', JSON.parse(obj));
  // console.log('[ListRecords]: objKey', objKey);
  // console.log('[ListRecords]: obj[objKey[0]]:', obj[objKey[0]]);
  // console.log('[ListRecords]: obj[objKey[0]][date]:', obj[objKey[0]]['date']);
  const edit = "🖉";
  const delet = "✗";
  // HandleRemoveFC(o.id as string)
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
