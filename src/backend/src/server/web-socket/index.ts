

module.exports = (wss: any) => {
  console.log(`[WSS]: `);
  return wss.on('connection', (ws: any, req: any) => {
    ws.on('error', () => console.error('WS ERROR'));
    ws.on('message', (mess: any) => {
      const url = req.url.slice(0,);
      const messJson = JSON.parse(mess);
      console.log(`[WSS]: The url ${url} JSON: ${{ ...messJson }} ${messJson['open'][0]} MESS: ${mess} `);
      console.log(`[WSS]: The message ${mess.keys()} Type: ${typeof mess}`);
      // const message = JSON.parse(mess);
      // for (let elem in message) {
        console.log(`[WSS]: The mess[i]: ${mess[0].steps}, ${mess[0]} `);
      // }
      // for (let i = 0; i < mess.length; i++){
      //   console.log(`[WSS]: The mess[i]: ${mess[i]}, `);

      // }
      // let messJSON = JSON.parse(mess);
      
      // getMesseges(messJSON)

      ws.onclose = (e: any) => {
        
        console.log(mess.keys());


      
      };
    });
    console.warn(`This's sendtime `);
  });

}

