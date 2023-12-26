/* src\frontend\steps\pageLoder\index.ts */

export default () => {
  const { WSocked } = require("../../webSocket/index.ts");
  let ws: any;
  if (!ws) {
    ws = new WSocked("wss://localhost:7070/")
    console.log("[pageLoder WS] has been made");
  };

  let stepsStr = JSON.stringify({ steps: [] });
  ws.onSend = stepsStr;

} 
