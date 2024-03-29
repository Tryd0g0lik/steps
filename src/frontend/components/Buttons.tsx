import React from "react";
import { type HeadersInterfaces as HeaderInterface } from "../header-interface.tsx";
import HeaderFC from "./Header.tsx";

/**
 * Сделать функцию где - нажжатие на кнопку выводи  TrainFC() в нынешнюю локация
 * @param header: On input a string type.
 * @returns will get the data button's header
 */
export default function ButtonFC({
  header
}: HeaderInterface): React.JSX.Element {
  return (
    <button data-testid="submit" className="ok" data-name='add' type="submit">

      <HeaderFC header={header} />
    </button>
  );
}
