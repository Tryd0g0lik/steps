const http = require("http");
const Koa = require("koa");
const cors = require('@koa/cors');
const logger = require("koa-logger");

// import { Server } from "ws";

// import { koaBody } from 'koa-body';
const WS = require('ws');

const app = new Koa();

app.use(logger());
app.use(cors());
const PORT = process.env.PORT || 7070;

const server = new http.createServer(app.callback());
const wss = new WS.Server({ server });
const WSServerBody = require("./web-socket");

console.log('[WSServerBody]: ');
app.use(async (ctx: any) => {
  console.log(`[WSServerBody]: ${ctx.host}`);
});
// app.use(async (ctx: any, next: any) => {
//   ctx.set('Access-Control-Allow-Origin', '*');
//   ctx.set('Access-Control-Allow-Headers', 'origin, x-requested-with, content-type');
//   ctx.set('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   await next();
// })


app.use(async (ctx: any) => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.method)} and  PORT: ${PORT}`;
  console.log('ctx.status', ctx.status);
})
WSServerBody(wss, WS);
console.log('[HOST]: ', process.env.HOST);
console.log('[PORT]: process.env.PORT:', process.env.PORT + '|| PORT' + PORT);
server.listen(PORT, () => {

  console.log('[serve: Server has been started.] ')
})
