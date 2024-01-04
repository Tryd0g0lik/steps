import React from "react";
import { WSocket } from "../../../webSocket/index.ts";
import lineCorrectValidate from "./validate.ts"

const url = 'ws://localhost:7070';
const wsSocket = new WSocket(url);

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
