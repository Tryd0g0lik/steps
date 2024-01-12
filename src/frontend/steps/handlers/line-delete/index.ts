import type React from "react";
import { WSocket } from "../../../webSocket/index.ts";
// import lineCorrectValidate from "./validate.ts";
// import Publisher from "../../publisher-data/index.ts";
const url = "ws://localhost:7070"; // "wss//steps-u8bq.onrender.com"; // 'ws://localhost: 7070';

// const publisher = new Publisher();
/**
 * This's  a handler. The event getting on entry point.
 *  Functuion geting event's datas. After this datas will be check to 'lineCorrectValidate' validater.
 * Validater returns boolean type. If 'true' it means the true key or 'false' the absence a true key.
 * If validator returns a true it means that datas  distribution througth a JSON's key and send to the server.
 * Datas sending througth Websocket. 1. Open the session/transaktion. 2.The message sending for the server. 3. Closed session.
 * @params `event`: event of action a press button.
 * @returns `void`.
 */
export default (event: React.MouseEvent): void => {
  console.log("[line-delete]:  WSocket OPEN", event.target);
  const wsSocket = new WSocket(url);
  event.preventDefault();
  interface DataPeoporties {
    action: string
    key: string
    distance: string
  }

  const htmlElement = <HTMLButtonElement>event.target;
  // let result: boolean | string;
  const datasetName = htmlElement.dataset.name;
  const datasetKey = htmlElement.dataset.key;
  if ((datasetName === undefined || datasetName !== "delete") || datasetKey === undefined) return;

  console.log("[line-delete]: ", datasetKey);
  const keyProporties: DataPeoporties = {
    action: datasetName,
    key: datasetKey,
    distance: "0"
  };

  // let lStorage: string = "{}";
  // const localStorageData = localStorage.getItem("heandlersData");
  // if (typeof localStorageData === "string") {
  //   lStorage = localStorageData;
  // }
  // console.log("[line-delete]: lStorage is got:", lStorage);

  // result = lineCorrectValidate((lStorage), keyProporties.key) as boolean;
  // if (!result) return;

  // console.log("[line-delete]: Recived the result:", result);
  const stepsStr: string = JSON.stringify({ delete: [{ key: keyProporties.key }] });
  wsSocket.onSend = stepsStr; // result;
  // console.log("[line-delete]: After routed the result:", result);
  // console.log("[line-delete]: Before will be send:", result);
  // // отправлены данные на сервер.Есть ключь строки и имя действия
};
