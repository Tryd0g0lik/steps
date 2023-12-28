import React from "react";
import { type HeadersInterfaces } from "../header-interface.tsx";

/**
 * The entry point is a interface's type Headers Interfaces
 * @param header: this's date on inpute. It's type a string.
 * @returns be public a title "<h2> my-title </h2>"
 */
export default function HeaderFC({ header }: HeadersInterfaces): React.JSX.Element {
  return <h2>{header}</h2>;
}
