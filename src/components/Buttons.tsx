import React from "react";
import { type HeadersInterfaces as HeaderInterface } from "../header-interface.tsx";
import HeaderFC from "./Header.tsx";

/**
 *
 * @param header: On input a string type.
 * @returns will get the data button's header
 */
export default function ButtonFC({
  header, handleClick = (e) => {
    e.preventDefault();
  },
}: HeaderInterface): React.JSX.Element {
  return (
    <button className="ok" onSubmit={handleClick}>
      <HeaderFC header={header} />
    </button>
  );
}
