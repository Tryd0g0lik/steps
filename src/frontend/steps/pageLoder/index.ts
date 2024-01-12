/* src\frontend\steps\pageLoder\index.ts */
import { WSocket } from "../../webSocket/index.ts";

const pageLoder = (item: Record<string, Array<Record<string, string>>>): void => {
  let ws: any;
  console.log("[pageLoder WS] has been start", item);
  if ((ws !== true) ||
    (ws === true &&
      (ws.readyState < 1 || ws.readyState > 1)
    )) {
    console.log("[pageLoder WS] has been ran");
    ws = new WSocket("wss://steps-u8bq.onrender.com"); // ws://localhost:7070
    console.log("[pageLoder WS] has been made");
    console.log("[pageLoder WS] ws.readyState: ", ws.readyState);
    console.log("[pageLoder WS] has been JSON confert");
    const stepsStr: string = JSON.stringify(item);
    console.log("[pageLoder WS] after the JSON confer and before to send ", stepsStr);
    // if (typeof stepsStr === "string") {
    ws.onSend = stepsStr;
  }
};
export default pageLoder;
