import React from "react";
import { HeadersInterfaces } from "../header-interface";

/**
 * 
 * @param header: this's date on inpute. It's type a string. 
 * @returns be public a title "<h2> my-title </h2>"
 */
export default function HeaderFC({ header }: HeadersInterfaces) {
	return <h2>{header}</h2>
}
