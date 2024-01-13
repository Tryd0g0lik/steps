import React from "react";
import Records from "../Records/index.tsx";

export default function TrainFC(): React.JSX.Element {
  let resp = "{}";
  const result = localStorage.getItem("heandlersData");
  if (result !== null && (typeof result).includes("string")) {
    resp = result;
  }
  // else {
  //   localStorage.setItem("heandlersData", "{}");
  //   result = localStorage.getItem("heandlersData");
  //   if (result !== null) {
  //     resp = result;
  //   }
  // }

  return (
      <>
        <ul className="head">
          <li>Дата (ДД.ММ.ГГ)</li>
          <li>Пройдено км 🐾</li>
          <li>Действия</li>
        </ul>

        <div className="contentBlock">
        <Records obj={resp} />
        </div>
      </>
  );
}
