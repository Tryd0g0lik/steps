
const dbSteps = require('../../db/steps.json');
const uuidv4 = require('uuid');
const setKeys = new Set();


const stepsGetId = ():string => {
  const id = uuidv4.v4();
  const keys = id.slice(0);
  const idObject = { keys: id };

  console.log(`db Ind: ${keys}`)
  if (setKeys.has(idObject)) {
    
    return stepsGetId()
  }
  console.log(`db setKeys BEFORE: ${JSON.stringify(idObject)}`)
  setKeys.add(idObject)
  console.log(`db setKeys AFTER: ${ id}`)
  return id;
  
}


module.exports = (wss: any, WS:any) => {
  console.log(`[WSS]: `);
  return wss.on('connection', (ws: any, req: any) => {
    ws.on('error', () => console.error('WS ERROR'));
    ws.on('message', (mess: any) => {
      let send = '';
      const url = req.url.slice(0,);
      const messJson = JSON.parse(mess);
      console.log(`[WS message]: MESS: ${mess} `);
      console.log(`[WS message]: stepsdb BEFORE: ${JSON.stringify(dbSteps)}`)
      const ind = stepsGetId();
      console.log(`[WS message]: Get IND: ${ind}`);
    
      console.log(`[WS message]: messJson[k].KEYs: ${Object.keys(messJson)}`);
      for (const k in messJson) {
        
        // console.log(`[WS message]: messJson[k].length: ${messJson[k].length} Volume k: ${k}`);
        // console.log(` messJson[k]: ${JSON.stringify(messJson[k])}`);
        (messJson[k].length > 0) ? (
          (k === 'open') ? (
            /* This's a page loader */
            send = { ...dbSteps }
          ) : (
              (k === 'insert') ? (
                messJson[k].filter((elem: any) => {
                  const arrayVal = Object.values(elem);
                  for (let i = 0; i < arrayVal.length; i++){
                    console.log(`arrayVal[${i}]: ${(arrayVal[i])}`);  
                    // if (JSON.stringify(dbSteps).indexOf(arrayVal[i]) >= 0) {return }
                  }
                  console.log(`Object.values ELEM: ${(Object.values(elem))}`)
                }),
              dbSteps[`${ind}`] = messJson[k]
            ) : dbSteps
          )
        ) : null;
        
      }
      const sendSTR = JSON.stringify(send);
      console.log(`[WS message]: sendSTR: ${send}`);
      send = '';
      /* This's a mailer for posts of the db */
      wss.clients.forEach((client: any) => {
        if (client !== ws) {
          client.send(sendSTR);
          console.log(`[WS message]: client.send: ${client}`)
        }
      });
    });
    ws.onclose = (e: any) => {
      console.log(`CLOSE neeed`);
    };
    console.warn(`This's sendtime `);
  });

}

