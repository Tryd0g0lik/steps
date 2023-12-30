import React from "react";
import HandleRemoveFC from "./HandleRemove.tsx";
const Pulisher = require("../../steps/piblisher-data/index.ts");
const publisher = new Pulisher()
import ListRecords from "../Records/index.tsx";
// let result: (string | Record<string, Record<string, string>>) = '';
export default function TrainFC(prop: any): React.JSX.Element {
// let trainigs: any[] = [];
// let result: (string | Record<string, Record<string, string>>) = prop.status;
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
