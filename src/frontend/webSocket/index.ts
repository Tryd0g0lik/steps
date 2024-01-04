/* src\frontend\webSocket\index.ts */


/**
 * template there is "{"date-4645bd71-8bd2-4075-a9b2-27dbfaebb7c6":{"date":"0333-03-31"},"distance-257e314f-9ac4-49c9-8ca7-1d228c2aa1a0":{"distance":"3"}, ....}" 
 * This's  a class for the WebSocket. It has some methods:
 * - 'set onMessag' - He is for to recive datas of server and will be saved in the site's localStorage. 
 * It starts to work in the listener'WebSocket.addEventListener('message', (e: Event) => {....}'
 * - 'set onSend' - It assigns keys to every data amd returns JSON's datas datas to send.
 * - 'get onSend' - Datas sending.
 * - 'heandlers' = this's object keys. This an every key has be saved datas list. It sending at a server from method 'get onSend'.
 */
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
      data: [],
      delete: [],
      edit: []
    }
  };

  set onMessage(e: Record<string, any>) {
    // console.log(`Получили данные сервера`);
    // this.heandlers['data'].push(JSON.parse(e['data']));
    console.warn("[WebSocked onMessage]: Save the 'heandlersData' to LocalStorage BEFORE: ", e['data']);
    localStorage.setItem('heandlersData', e['data']);
    console.log(`[WebSocked onMessage]: ${JSON.stringify(this.heandlers)}`);
    console.log(`Получили данные сервера`);
    // this.close;
    // }
  };

  onError(e: any) {
    console.log("[WebSocked onError]: has been break");
  };
  /**
   * Entry point getting a datas lis from from page. This's a pach wich be has listing of user's records.
   * @params 'this.heandlers': It is accepts datas
   */
  set onSend(prop: string) {
    const transactionKeys = <string[]>['open', 'close', 'insert', 'data', 'delete', 'edit']
    console.log("[WebSocked onSend]: prop ", prop, `The type is: ${typeof prop}  ofa prop`);
    const stepsJSON = JSON.parse(prop);
    console.log("[WebSocked onSend]: stepsJSON ", stepsJSON);
    // console.log("[WebSocked onSend]: stepsJSON ", stepsJSON, `stepsJSON['steps'].LENGTH: ${stepsJSON['steps'].length}`);
    for (const k of transactionKeys) {
      if (k in stepsJSON) {
        (this.heandlers)[k] = stepsJSON[k],
          console.log(`this.heandlers[${k}] AFTER: ${JSON.stringify(this.heandlers)}`);
        // Проверить что получаем.После нажати удалить должны получить "{ 'delete': { key: data-... } }"
        // редактировать - "{ 'delete': { key: data-... },  'distance':12 }"
        return
      }
    }
    console.log("[WebSocked onSend]: The heandlers['open'] Data has been saved ", JSON.stringify(this.heandlers));
  }

  /**
   * @params 'this.heandlers' getting and to send in a server. 
   * @returns 'steps' JSON's data.
   */
	get onSend() {
    const steps = this.heandlers;

		const stepsStr = JSON.stringify({ ...steps });
		this.socket.send(stepsStr);
    const keyList = Object.keys(steps);
    keyList.forEach((key: string) => {
      this.heandlers[key] = [];
    })
    // for (let i = elem in keyList) {
    // 	this.heandlers[`${elem}`] = [];
    // }
    return steps
  }
  get close() {
    return this.socket.close();
  }
}
