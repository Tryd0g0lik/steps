import React from "react";
const Publisher = require("../../steps/publisher-data/index.ts");

import ListRecords from "../Records/index.tsx";

export default function TrainFC(): React.JSX.Element {
  // const publisher = new Publisher()
  // const resp = publisher.dataGetForPublish;
  const resp = localStorage.getItem('heandlersData');

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
