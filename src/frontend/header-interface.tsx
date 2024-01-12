/**
 * Intarface is name "HeadersInterfaces"
  @param header:string;
*/
// type ButtonClickFunction = (event: React.MouseEventHandler<HTMLButtonElement>) => void;

// type InputClickFunction = (event: React.MouseEventHandler<HTMLButtonElement>) => void; // event: React.MouseEvent<HTMLInputElement>

export interface HeadersInterfaces {
  header: string
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}
/**
 * Intarface is name "Forms"
  @param header: string;
 * @param inputName: string;
 * @param inputType: string;
 * @param inputId?: string;
 * @param handleClick: InputClickFunction "{(item: React.ChangeEvent<HTMLInputElement>): void;}}"";
 */
export interface Forms {
  header: string
  inputName: string
  inputType: string
  inputId?: string
}

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events
