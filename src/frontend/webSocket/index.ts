/* src\frontend\webSocket\index.ts */


type HeandlersSteps = {
  open: any[],
  close: any[],
  inser: any[],
  data: any[]
}

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
      this.onMessage(e);
    });
    this.socket.addEventListener('close', (e: any) => {
      if (e.wasClean) console.warn('[WebSocket EventListenerClose]:', this.socket.readyState)
      else this.onError(e);

    })

    this.heandlers = {
      open: ['старт'],
      close: [],
      inser: [],
      data: []
    }
  };

  onMessage(e: any) {
    if (e.request.method.includes(String(['GET', 'POST', 'INSERT']))) {
      console.log("[WebSocked onMessage]: has been started");
    }
  };

  onError(e: any) {
    console.log("[WebSocked onError]: has been break");
  };

  set onSend(prop: string) {
    console.log("[WebSocked onSend]: prop ", prop, `The type is a prop: ${typeof prop} `);
    const stepsJSON = JSON.parse(prop);
    console.log("[WebSocked onSend]: stepsJSON ", stepsJSON, `stepsJSON['steps'].LENGTH: ${stepsJSON['steps'].length}`);
    if (stepsJSON['steps'].length === 0) {
      console.log("[WebSocked onSend]: The heandlers['open'] - this's defore it's a data saved");
      this.heandlers['open'].push(stepsJSON);
      console.log("[WebSocked onSend]: The heandlers['open'] Data has been saved ");

    }
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
