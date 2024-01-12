import type React from "react";
import { WSocket } from "../../../webSocket/index.ts";
const url = "wss://steps-u8bq.onrender.com"; // "wss//steps-u8bq.onrender.com"; // 'ws://localhost:7070';

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
  const datasetName = htmlElement.dataset.name;
  const datasetKey = htmlElement.dataset.key;
  if ((datasetName === undefined || datasetName !== "delete") || datasetKey === undefined) return;

  console.log("[line-delete]: ", datasetKey);
  const keyProporties: DataPeoporties = {
    action: datasetName,
    key: datasetKey,
    distance: "0"
  };
  const stepsStr: string = JSON.stringify({ delete: [{ key: keyProporties.key }] });
  wsSocket.onSend = stepsStr;
};
