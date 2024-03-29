const http = require("http");
const Koa = require("koa");
const cors = require("@koa/cors");
const logger = require("koa-logger");

// import { Server } from "ws";

// import { koaBody } from 'koa-body';
const WS = require("ws");
const WSServerBody = require("./web-socket");

const app = new Koa();

app.use(logger());
app.use(cors());

const server = new http.createServer(app.callback());
const wss = new WS.Server({ server });

console.log("[WSServerBody]: ");
app.use(async (ctx: any) => {
  console.log(`[WSServerBody]: ${ctx.host}`);
});
// app.use(async (ctx: any, next: any) => {
//   ctx.set('Access-Control-Allow-Origin', '*');
//   ctx.set('Access-Control-Allow-Headers', 'origin, x-requested-with, content-type');
//   ctx.set('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   await next();
// })

app.use(async (ctx: any): Promise<void> => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.method)} and  PORT: ${PORT}`;
  console.log("ctx.status", ctx.status);
});

WSServerBody(wss, WS);
const PORT = String(7070); // process.env.PORT ??
console.log("[HOST]: ", process.env.HOST);
console.log("[PORT]: process.env.PORT:", `${process.env.PORT}|| PORT: ${PORT}`);
server.listen(PORT, () => {
  console.log("[serve: Server has been started.] ");
});
