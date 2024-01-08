/* src\frontend\steps\pageLoder\index.ts */
const { WSocket } = require("../../webSocket/index.ts");

module.exports = (item: Record<string, Array<Record<string, string>>>) => {// object[]

  let ws: any;
  console.log("[pageLoder WS] has been start");
  if (!ws || (ws
    && (ws.readyState < 1 || ws.readyState > 1))) {
    console.log("[pageLoder WS] has been ran");
    ws = new WSocket('ws://steps-u8bq.onrender.com');
    console.log("[pageLoder WS] has been made");
  };
  console.log("[pageLoder WS] has been JSON confert");
  let stepsStr = JSON.stringify(item);
  console.log("[pageLoder WS] after the JSON confer and before to send ", stepsStr);
  ws.onSend = stepsStr;
  
  
} 

