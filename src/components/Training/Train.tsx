import React, { useState } from "react";
import HandleRemoveFC from "./HandleRemove.tsx";
import ButtonFC from "../Buttons.tsx";

export default function TrainFC() {


  const edit = '🖉';
  const delet = '✗';
  let trainigs: any[] = [];
  return (
    <div className="feature">
      <ul className="head">
        <li>Дата (ДД.ММ.ГГ)</li>
        <li>Пройдено км 🐾</li>
        <li>Действия</li>
      </ul>

      <div className="contentBlock">
        {trainigs.map(o => <ul className="content" key={o.id}>
          <li>{o.date}</li>
          <li>{o.distanc}</li>
          <li>
            <button onClick={() => HandleRemoveFC(o.id)}>{delet}</button> </li>
        </ul>)}
      </div>
    </div>
  )
}
