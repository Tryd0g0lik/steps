// import { wait } from "@testing-library/user-event/dist/utils";

let dbSteps = require('../../db/steps.json'); /* template there is "{"date-4645bd71-8bd2-4075-a9b2-27dbfaebb7c6":{"date":"0333-03-31", "distance":"3"}, ....}" */
const uuidv4 = require('uuid');
const setKeys = new Set();
let variableSend = '';

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
/**
 * Inside this function there is a means to verifying of the data unique.
 * @param str : this's a transaction key
 * @param arr : this array data is from event websocket's message
 */
const inserter =  (action: string, arr: Record<string, any[]>): void => {
  console.log(`[WS inserter INSERT]: arr: ${JSON.stringify(arr)}`);
  console.log(`[WS inserter INSERT]: str: ${action}`);
  console.log(`[WS inserter INSERT]: arr[action]: ${JSON.stringify(arr[action]) }`);
  // if (arr[str].length > 0) {
  if (action === 'open') {
      
      /* This's a page loader */      
      variableSend = { ...dbSteps }
      console.log(`[WS inserter OPEN]: send: ${variableSend}`);
    }
  else if (action === 'insert') {
      const filterArrKey = <string[]>[];

      /*
       *  Getting data unique 
      */
    const filterArr = <[Record<string, any[]>]>arr[action].filter((elem: any) => {

        const arrayVal = Object.values(elem);
        const arrayKey = Object.keys(elem);
        console.log(`[WS inserter INSERT]: arrayVal: ${(arrayVal)}`);
        for (let i = 0; i < arrayVal.length; i++) {

          console.log(`[WS inserter INSERT]: arrayVal[${i}]: ${(arrayVal[i])}`);
          const v = <string>arrayVal[i];
          if (JSON.stringify(dbSteps).indexOf(v) === -1) {
            filterArrKey.push(arrayKey[i]); /* This's filter's keys */
            return elem 
          };
        }
       
        // console.log(`[WS insert]: Object.values ELEM: ${(Object.values(elem))}`)
      }    
      );
     
      for (let i = 0; i < filterArrKey.length; i++){
       
        dbSteps[`${filterArrKey[i]}-${stepsGetId()}`] = filterArr[i];
      };
      variableSend = { ...dbSteps };
      console.log(`[WS inserter INSERT]: send KEY: ${Object.keys(variableSend)} VALUE ${Object.values(variableSend)}`)

    } 
  else if (action === 'delete') {
      console.log(`[WS DELETE]: `);
      let dbStepsCopy = { ...dbSteps };
      console.log(`[WS DELETE]: get db to dbStepsCopy.`);
      console.log(`[WS DELETE]: It is a copy db BEFOR delete: ${JSON.stringify(dbStepsCopy)}`);
      let dbStepsCopyKeys = Object.keys(dbStepsCopy);
      console.log(`[WS DELETE]: get the list db's keys: ${dbStepsCopyKeys}`);
      let dbStepsFilter = JSON.parse('{}');
      // console.log(`[WS DELETE]: The position is BEFOR delete: ${JSON.stringify(arr['delete'][0]['key'])}`);
      dbStepsCopyKeys.forEach((key: string) => {
        
        if (key !== arr['delete'][0]['key']) {
          
          dbStepsFilter[key] = dbStepsCopy[key]
          return
        } 
       
      });
      dbSteps = dbStepsFilter;
      variableSend = { ...dbSteps };
      console.log(`[WS DELETE]: The position is AFTER delete: ${JSON.stringify(dbSteps)}`);

      // if (Object.keys(dbStepsFilter).length > 0) {
      //   dbSteps = dbStepsFilter;
      // }
  } else if (action === 'edit') {
      console.log(`[WS EDIT]: `);
    console.log(`[WS EDIT]: recive's datas from site: ${JSON.stringify(arr[action])}`);
    const datasFromSite = arr[action][0];
    const keyFromSite = Object.keys(datasFromSite);
    console.log(`[WS EDIT]: recive's datas from site - key:. ${keyFromSite}`);
      let dbStepsCopy = { ...dbSteps };
      console.log(`[WS EDIT]: get db to dbStepsCopy.`);
      console.log(`[WS EDIT]: It is a copy db BEFOR aDIT: ${JSON.stringify(dbStepsCopy)}`);
    dbStepsCopy[datasFromSite['key']]['distance'] = datasFromSite['distance'];
    // dbStepsCopy[keyFromSite]['diatance'] = datasFromSite[keyFromSite]['distance'];
    // console.log(`[WS EDIT]: adite's datas: ${dbStepsCopy}`);
      // let dbStepsFilter = JSON.parse('{}');
      // console.log(`[WS DELETE]: The position is BEFOR delete: ${JSON.stringify(arr['delete'][0]['key'])}`);
      // dbStepsCopyKeys.forEach((key: string) => {

      //   if (key === arr['edit'][0]['key']) {

      //     dbStepsFilter[key]['distance'] = dbStepsCopy[key]['distance']
      //     return
      //   }

      // });
      dbSteps = dbStepsCopy;
      // variableSend = { ...dbSteps };
      // console.log(`[WS DELETE]: The position is AFTER delete: ${JSON.stringify(dbSteps)}`);

      // if (Object.keys(dbStepsFilter).length > 0) {
      //   dbSteps = dbStepsFilter;
      // }
    }
  // }
}

module.exports = (wss: any, WS:any) => {
  console.log(`[WSS]: `);
  return wss.on('connection', (ws: any, req: any) => {
    ws.on('error', () => console.error('WS ERROR'));
    ws.on('message', (mess: any) => {
      
      const url = req.url.slice(0,);
      const messJson = JSON.parse(mess);
      console.log(`[WS message]: MESS: ${mess} `);
      const dbStepsKEYS = Object.keys(dbSteps);
      console.log(`[WS message]: stepsdb KEYS BEFORE: ${dbStepsKEYS}`)
      console.log(`[WS message]: stepsdb BEFORE: ${JSON.stringify(dbSteps)}`)
      
      /* checker to unique */
      for (const k in messJson) {
        
        // console.log(`[WS message]: messJson[k].length: ${messJson[k].length} Volume k: ${k}`);
        // console.log(` messJson[k]: ${JSON.stringify(messJson[k])}`);
        if (messJson[k].length > 0) {
          inserter(k, messJson);
        }
      }
      const sendSTR = JSON.stringify(variableSend).slice(0);
      console.log(`[WS message]: sendSTR: ${sendSTR}`);
      


      /* This's a mailer for posts of the db */
      wss.clients.forEach((client: any) => {
        console.log(`[WS message]: client.send BEFORE: ${"Sent"} ${client === ws}`)
        if (client === ws && client.readyState === WS.OPEN ) {
          client.send(sendSTR);
          console.log(`[WS message]: client.send: ${"Sent"}`)
        }
      }
      );

      variableSend = '';
    });
    ws.onclose = (e: any) => {
      console.log(`CLOSE neeed`);
    };
    console.warn(`This's sendtime `);
    console.log('----------------');
  });
  

}

