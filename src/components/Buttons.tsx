import React from "react";
import { HeadersInterfaces as HeaderInterface } from "../header-interface";
import HeaderFC from "./Header.tsx";

/**
 * 
 * @param header: On input a string type.
 * @returns will get the data button's header
 */
export default function ButtonFC({ header, handleClick = (e) => {
  e.preventDefault();

} }: HeaderInterface) {
	return (
    <button className="ok" onSubmit={handleClick}>
			<HeaderFC header={header} />
		</button>
	)
}



