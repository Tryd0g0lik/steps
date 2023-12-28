import React from "react";
import HandleRemoveFC from "./HandleRemove.tsx";
// import ButtonFC from "../Buttons.tsx";

export default function TrainFC(): React.JSX.Element {
  const edit = "🖉";
  const delet = "✗";
  const trainigs: [{ id: string | number, date: string, distanc: string }] = [
    { id: "0", date: "0", distanc: "striing" },
  ];
  return (
    <div className="feature">
      <ul className="head">
        <li>Дата (ДД.ММ.ГГ)</li>
        <li>Пройдено км 🐾</li>
        <li>Действия</li>
      </ul>

      <div className="contentBlock">
        {trainigs.map(o => <ul className="content" key={o.id as string}>
          <li>{o.date}</li>
          <li>{o.distanc}</li>
          <li>
            <button onClick={() => HandleRemoveFC(o.id as string)}>{delet}</button> </li>
          <li>
            <button onClick={() => HandleRemoveFC(o.id as string)}>{edit}</button> </li>
        </ul>)}
      </div>
    </div>
  );
}
