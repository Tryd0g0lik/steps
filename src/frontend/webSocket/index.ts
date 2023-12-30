/* src\frontend\webSocket\index.ts */

export class WSocket {
  heandlers: any;
  socket: any;
  // addEventListener(arg0: string, arg1: (e: Event) => void) {
  //   throw new Error("Method not implemented.");
  // }
  constructor(url: string) {
    console.warn("[WebSocket ]: url", url);
    this.socket = new WebSocket('ws://localhost:7070');

    this.socket.addEventListener('open', async (e: Event) => {
      console.warn("[WebSocket]: Server was connected", this.socket.readyState);
			this.onSend

		});

    this.socket.addEventListener('message', (e: Event) => {
      console.warn("[WebSocket EventListenerMessage]: ", this.socket.readyState);
      console.warn("[WebSocket Got message]: ", e);
      this.onMessage = e;
    });
    this.socket.addEventListener('close', (e: any) => {
      if (e.wasClean) console.warn('[WebSocket EventListenerClose]:', this.socket.readyState)
      else this.onError(e);

    })

    this.heandlers = {
      open: [],
      close: [],
      insert: [],
      data: []
    }
  };

  set onMessage(e: Record<string, any>) {
    // console.log(`Получили данные сервера`);
    // this.heandlers['data'].push(JSON.parse(e['data']));
    console.warn("[WebSocked onMessage]: Save the 'heandlersData' to LocalStorage BEFORE: ", e['data']);
    localStorage.setItem('heandlersData', e['data']);
    console.log(`[WebSocked onMessage]: ${JSON.stringify(this.heandlers)}`);
    console.log(`Получили данные сервера`);
    this.socket.close();
    // }
  };

  onError(e: any) {
    console.log("[WebSocked onError]: has been break");
  };

  set onSend(prop: string) {
    const transactionKeys = <string[]>['open', 'close', 'insert', 'data']
    console.log("[WebSocked onSend]: prop ", prop, `The type is a prop: ${typeof prop} `);
    const stepsJSON = JSON.parse(prop);
    // console.log("[WebSocked onSend]: stepsJSON ", stepsJSON, `stepsJSON['steps'].LENGTH: ${stepsJSON['steps'].length}`);
    for (const k of transactionKeys) {
      if (k in stepsJSON) (
        (this.heandlers)[k] = stepsJSON[k],
        console.log(`this.heandlers[${k}] AFTER: ${JSON.stringify(this.heandlers)}`));
    }
    console.log("[WebSocked onSend]: The heandlers['open'] Data has been saved ", JSON.stringify(this.heandlers));
  }

	get onSend() {
		const steps = this.heandlers;
		const stepsStr = JSON.stringify({ ...steps });
		this.socket.send(stepsStr);

		for (const elem in this.heandlers) {
			this.heandlers[`${elem}`] = [];
		}
		return this.heandlers
	}
}
