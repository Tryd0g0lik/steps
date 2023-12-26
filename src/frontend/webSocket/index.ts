/* src\frontend\webSocket\index.ts */


type HeandlersSteps = {
  open: any[],
  close: any[],
  inser: any[],
  data: any[]
}

export default class WSocket {
  heandlers: HeandlersSteps;
  socket: WebSocket;
  addEventListener(arg0: string, arg1: (e: Event) => void) {
    throw new Error("Method not implemented.");
  }
  constructor(url: string) {
    this.socket = new WebSocket(url);
    this.socket.addEventListener('open', async (e: Event) => { console.log("[WebSocket EventOpen]: an event open ") });
    this.socket.addEventListener('message', (e: Event) => {
      console.log("[WebSocket EventListenerMessage]: an event open ");
      this.onMessage(e);
    });
    this.socket.addEventListener('close', (e: any) => {
      if (e.wasClean) console.log('[WebSocket EventListenerClose]: connection closed clean!')
      else console.log('[WebSocket]: connection closed aborted!');
      this.onError(e);
    })

    this.heandlers = {
      open: [],
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

  async onOpen() {

  }

  // set steps(arrt: any) {
  //   return
  // }

  set onSend(prop: string) {
    const stepsJSON = JSON.parse(prop);
    if (stepsJSON['steps'].length === 0) {
      this.heandlers['open'].push(stepsJSON);
      const stepsStr = JSON.stringify(this.heandlers['open']);
      this.socket.send(stepsStr)
    }
  }

}
