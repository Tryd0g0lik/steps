import React from "react";
import HandleRemoveFC from "./HandleRemove.tsx";
const Pulisher = require("../../steps/piblisher-data/index.ts");
const publisher = new Pulisher()
import ListRecords from "../Records/index.tsx";
// import ButtonFC from "../Buttons.tsx";

export default function TrainFC(): React.JSX.Element {

  // const trainigs: [{ id: string | number, date: string, distanc: string }] = [
  //   { id: "0", date: "0", distanc: "12" },
  // ];
  let trainigs: any[] = [];
  let result: (string | Record<string, Record<string, string>>) = '';
  const resp = publisher.dataGetForPublish;
  console.log(`[dataLStoorageGet]: publisher.publish: ${(resp)}`);

  result = resp === false ? (
    // setTimeout(() => {
    //   dataLStoorageGet(timeout);
    //   console.log(`[dataLStoorageGet]: setTimeout`)
    // }, timeout),
    '{}'
  ) : (
    resp
  );
  if (typeof result !== "object") {
    // console.log('[dataLStoorageGet ARR]: ', JSON.parse(result))


    return (
      <div className="feature">
        <ul className="head">
          <li>Дата (ДД.ММ.ГГ)</li>
          <li>Пройдено км 🐾</li>
          <li>Действия</li>
        </ul>

        <div className="contentBlock">
          {/* {Array.from(JSON.parse(result)).map(o => */}

          <ListRecords obj={resp} />
          {/* ) */}
          {/* } */}

        </div>
      </div>
    );
  }
  return (
    < ul className="content"  >

      <li></li>
      <li></li>
      <li>
      </li>
      <li>
      </li>

    </ul >
  )

}
