import React from "react";
import handlerDelte from "../../steps/handlers/line-delete/index.ts";
import hendlerEdit from "../../steps/handlers/line-edit/index.ts";
import sorter from "../../steps/sorter/index.ts";

interface ObjLocalStorage {
  obj: string
}
type KRecords = string;

/**
 * This is a function component. It's has been field a date, field the distance and two buttons
 * Temlplate: '{"date-9421b68b-9522-4f1a-a4ef-15c44d8f4c21":{"date":"0032-02-23","distance":"122"}, ....}'
 * @param `{obj}': for a entry point. It's a JSON type the string.
 * @returns React component.
 */
export default function Records({ obj }: ObjLocalStorage): React.JSX.Element | undefined {
  const objJSON = JSON.parse(obj) as Record<string, Record<string, string>>;
  const objSorting = sorter(objJSON);
  console.log("[Records: ]", obj);
  const objKey = Object.keys(objSorting);
  console.log("[Records: ] objKey:", objJSON);
  console.log("[Records: ] obj[...]:", objJSON[objKey[0]]);
  if (objKey.length === 0) return;

  const edit = "🖉";
  const delet = "✗";
  console.log(["Records: "], obj);
  if (obj.length > 5) {
    return (
      <>
        {objKey.map((keyRecord: KRecords) => (
          < ul className="content" key={keyRecord} >
            <li>{objJSON[keyRecord].date}</li>
            <li data-testid='distance'>{objJSON[keyRecord].distance}</li>
            <li>
              <button type="submit" data-key={keyRecord} data-name="delete" onClick={handlerDelte}>{delet}</button> </li>
            <li>
              <button data-key={keyRecord} data-name="edit" onClick={(e) => { hendlerEdit(e); }}>{edit}</button>
            </li>
          </ul >
        ))
        }
      </>
    );
  }
}
