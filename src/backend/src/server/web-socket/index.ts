
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


module.exports = (wss: any) => {
  console.log(`[WSS]: `);
  return wss.on('connection', (ws: any, req: any) => {
    ws.on('error', () => console.error('WS ERROR'));
    ws.on('message', (mess: any) => {
      let send = '';
      const url = req.url.slice(0,);
      const messJson = JSON.parse(mess);
      console.log(`[WSS]: MESS: ${mess} `);
      console.log(`stepsdb BEFORE: ${JSON.stringify(dbSteps)}`)
      const ind = stepsGetId();
      console.log(`Get IND: ${ind}`);
    
      
      for (const k in messJson) {
        // console.log(`messJson[k].length: ${messJson[k].length}`);
        // console.log(` messJson[k]: ${JSON.stringify(messJson[k])}`);
        (messJson[k].length > 0) ? (
          (k === 'open') ? ( 
            /* This's a page loader */
            send = { ...dbSteps }
            
          ) : (
            (k === 'insert') ? (
              dbSteps[`${k}-${ind}`] = messJson[k]
            ) : dbSteps
          )
        ) : null;
        
      }
      // const k_ = Object.keys(dbSteps);
      // console.log(`dbSteps.keys: ${k_}`);
      // console.log(`Object.values AFTERs: ${Object.values(dbSteps)}`)
      

      ws.onclose = (e: any) => {
        
        console.log(mess.keys());


      
      };
    });
    console.warn(`This's sendtime `);
  });

}

