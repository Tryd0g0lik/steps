import React from "react";
const Pulisher = require("../../steps/piblisher-data/index.ts");

import ListRecords from "../Records/index.tsx";

export default function TrainFC(): React.JSX.Element {
  const publisher = new Pulisher()
  const resp = publisher.dataGetForPublish;
    return (
      <div className="feature">
        <ul className="head">
          <li>Дата (ДД.ММ.ГГ)</li>
          <li>Пройдено км 🐾</li>
          <li>Действия</li>
        </ul>

        <div className="contentBlock">
          <ListRecords obj={resp} />
        </div>
      </div>
    );


}
