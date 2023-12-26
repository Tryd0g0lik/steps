var http = require("http");
var Koa = require("koa");
var logger = require("koa-logger");
// import { Server } from "ws";
// import { koaBody } from 'koa-body';
// const WS = require('ws');
var app = new Koa();
app.use(logger());
var PORT = process.env.PORT || 7070;
var server = new http.createServer(app.callback());
// const wss = new WS.Server({ server });
// app.use(async (ctx: any, next: any) => {
//   ctx.set('Access-Control-Allow-Origin', '*');
//   ctx.set('Access-Control-Allow-Headers', 'origin, x-requested-with, content-type');
//   ctx.set('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   await next();
// })
app.use(function (ctx) {
    ctx.body = "Request Body: ".concat(JSON.stringify(ctx.request.method), " and  PORT: ").concat(PORT);
});
server.listen(PORT, function () {
    console.log('[serve: Server has been started.] ');
});
