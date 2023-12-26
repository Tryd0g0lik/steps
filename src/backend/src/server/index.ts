const http = require("http");
const Koa = require("koa");
const logger = require("koa-logger");
// import { Server } from "ws";

// import { koaBody } from 'koa-body';
// const WS = require('ws');

const app = new Koa();
app.use(logger());
const PORT = process.env.PORT || 7070;

const server = new http.createServer(app.callback());
// const wss = new WS.Server({ server });

// app.use(async (ctx: any, next: any) => {
//   ctx.set('Access-Control-Allow-Origin', '*');
//   ctx.set('Access-Control-Allow-Headers', 'origin, x-requested-with, content-type');
//   ctx.set('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   await next();
// })

app.use((ctx: any) => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.method)} and  PORT: ${PORT}`;
})


server.listen(PORT, () => {
  console.log('[serve: Server has been started.] ')
})
