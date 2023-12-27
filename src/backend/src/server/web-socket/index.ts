module.exports = (wss: any) => {
  console.log(`[WSS]: `);
  return wss.on('connection', (ws: any, req: any) => {
    ws.on('error', () => console.error('WS ERROR'));
    ws.on('message', (mess: any) => {
      const url = req.url.slice(0,);
      console.log(`[WSS]: The url ${url} `);
      console.log(`[WSS]: The message ${mess} `);
      ws.onclose = (e: any) => {
        const message = JSON.parse(mess);
        console.log(message);
      };
    });
    console.warn(`This's sendtime `);
  });

}

