/* src\frontend\steps\pageLoder\index.ts */
const { WSocket } = require("../../webSocket/index.ts");
module.exports = (item: Record<string, object[]>) => {

  let ws: any;
  console.log("[pageLoder WS] has been start");
  if (!ws || (ws
    && (ws.readyState < 1 || ws.readyState > 1))) {
    console.log("[pageLoder WS] has been ran");
    ws = new WSocket('ws://localhost:7070');
    console.log("[pageLoder WS] has been made");
  };
  console.log("[pageLoder WS] has been JSON confert");
  let stepsStr = JSON.stringify(item);
  console.log("[pageLoder WS] after the JSON confer and before to send ", stepsStr);
  ws.onSend = stepsStr;

	// ws.heandlers

  //

	const dataGet = (data: Array<Record<string, any>>): any => {
		if (data.length === 0) {
			return setTimeout(() => {

				return dataGet(ws.heandlers['data']);
			}, 1500);
		} else {
			data.forEach((item: Record<string, Record<string, string>>) => {
				// console.log(`[dataGet]: ${JSON.stringify(item)}`);

			})

			// return data
		}
	}
	dataGet(ws.heandlers['data']);
} 

