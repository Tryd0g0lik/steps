import React from "react";

/**
 * Intarface is name "HeadersInterfaces"
 * @param header:string;
 */
interface ButtonClickFunction {

  (item: React.MouseEvent<HTMLButtonElement>): void
}

interface InputClickFunction {
  (event: React.MouseEvent<HTMLInputElement, MouseEvent>): void; // event: React.MouseEvent<HTMLInputElement>
}

export interface HeadersInterfaces {
  header: string;
  handleClick?: ButtonClickFunction
};
/**
 * Intarface is name "Forms"
 * @param header: string;
 * @param inputName: string;
 * @param inputType: string;
 * @param inputId?: string;
 * @param handleClick: InputClickFunction "{(item: React.ChangeEventHandler<HTMLInputElement>): void;}}"";
 */
export interface Forms {
  header: string;
  inputName: string;
  inputType: string;
  inputId?: string;
  handleClick?: InputClickFunction;
}

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events

