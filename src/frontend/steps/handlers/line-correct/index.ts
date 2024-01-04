import React from "react";
import { WSocket } from "../../../webSocket/index.ts";
import lineCorrectValidate from "./validate.ts"

const url = 'ws://localhost:7070';
const wsSocket = new WSocket(url);

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
  event.preventDefault();
  type DataPeoporties = {
    action: string;
    key: string;
    distance: string
  };
  const htmlElement = <HTMLButtonElement>event.target;
  let result: boolean | string;

  if ((typeof htmlElement.dataset.name !== 'string') || (typeof htmlElement.dataset.key !== 'string')) { return }
  console.log(htmlElement.dataset.key);
  const keyProporties: DataPeoporties = {
    action: htmlElement.dataset.name,
    key: htmlElement.dataset.key,
    distance: '0'
  }
  const lStorage = localStorage.getItem('heandlersData')
  result = lineCorrectValidate((lStorage as string), keyProporties['key'])
  if (!result) return

  const action = keyProporties['action'] === 'delete' ? 'delete' : 'edit';
  result = action === 'delete' ? JSON.stringify({ delete: { key: keyProporties["key"] } }) : JSON.stringify({ edit: { key: keyProporties["key"], "distance": keyProporties['distance'] } });

  wsSocket.onSend = result;
  wsSocket.close;
  // отправить данные на сервер.Есть ключь строки и имя действия
  // console.log(typeof htmlElement.dataset.key)
  // console.log(event.target.attributes)

};
