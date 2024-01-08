import React from "react";
import { WSocket } from "../../../webSocket/index.ts";
import lineCorrectValidate from "./validate.ts";
// import Publisher from "../../publisher-data/index.ts";
const url = 'ws://steps-u8bq.onrender.com';

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
  
  console.log(`[line-delete]:  WSocket OPEN`, event.target)
  const wsSocket = new WSocket(url);
  event.preventDefault();
  type DataPeoporties = {
    action: string;
    key: string;
    distance: string
  };
  const htmlElement = <HTMLButtonElement>event.target;
  let result: boolean | string;

  if ((htmlElement.dataset.name) && (htmlElement.dataset.name !== 'delete')) { return }

  console.log('[line-delete]: ', htmlElement.dataset.key);
  const keyProporties: DataPeoporties = {
    action: htmlElement.dataset.name as string,
    key: htmlElement.dataset.key as string,
    distance: '0'
  }
  
  const lStorage = localStorage.getItem('heandlersData')
  console.log('[line-delete]: lStorage is got:', lStorage);
  result = lineCorrectValidate((lStorage as string), keyProporties['key'])
  if (!result) return

  let action: string = '';
  if (keyProporties['action'] === 'delete') {
    action = 'delete'
  }
  // result = action === 'delete' ? JSON.stringify({ delete: [{ key: keyProporties["key"] }] }) : JSON.stringify({ edit: { key: keyProporties["key"], "distance": keyProporties['distance'] } });

  console.log('[line-delete]: Recived the result:', result);
  wsSocket.onSend = JSON.stringify({ delete: [{ key: keyProporties["key"] }] }); // result;
  console.log('[line-delete]: After routed the result:', result);
  console.log('[line-delete]: Before will be send:', result); 
  // отправлены данные на сервер.Есть ключь строки и имя действия
 
};
