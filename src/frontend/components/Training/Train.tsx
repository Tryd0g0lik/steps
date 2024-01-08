import React from "react";
const Publisher = require("../../steps/publisher-data/index.ts");

import ListRecords from "../Records/index.tsx";

export default function TrainFC(): React.JSX.Element {
  // const publisher = new Publisher()
  // const resp = publisher.dataGetForPublish;
  let resp = '{}';
  if (localStorage.getItem('heandlersData') || localStorage.getItem('heandlersData') !== null) {
    resp = localStorage.getItem('heandlersData') as string;
  } else {
    localStorage.setItem('heandlersData', '{}');
    resp = localStorage.getItem('heandlersData') as string;
  }


    return (
      <>
        <ul className="head">
          <li>Дата (ДД.ММ.ГГ)</li>
          <li>Пройдено км 🐾</li>
          <li>Действия</li>
        </ul>

        <div className="contentBlock">
          <ListRecords obj={resp} />
        </div>
      </>
    );


}
