import React from "react";
interface Index {
  id: string;
}
export default function HandleRemoveFC({ id }: Index) {
  return (<p>{id}</p>)
}
