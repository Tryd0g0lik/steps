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
      const steps = this.heandlers;
      const stepsStr = JSON.stringify({ ...steps });
      // const entry = Object.create({ steps: stepsStr });
      this.socket.send(stepsStr);
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

  // get onSend() {
  //   const stepsStr = JSON.stringify(this.heandlers['open']);
  //   console.log("[WebSocked onSend]: heandlers['open'] after convertation in a type string. Before a send stepsStr :", stepsStr);
  //   console.log("[WebSocked onSend]: readyState :", this.socket.readyState);
  //   let readyState = this.socket.readyState;
  //   // if (readyState < 1 || readyState > 1) {
  //   console.warn("[WebSocked onSend]: readyState :", readyState, "It's not equal to 1. Could't send");
  //   // }

  //   console.log("[WebSocked onSend]: After a sent stepsStr :", stepsStr);
  //   return this.socket.send(stepsStr)
  // }
}
