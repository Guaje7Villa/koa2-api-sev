import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import router from './routes';
import { logger } from './logger';
import { createConnection } from 'typeorm';
import 'reflect-metadata';

// 初始化 Koa 应用实例
const app = new Koa();

// 注册中间件
app.use(cors());
app.use(bodyParser());
app.use(logger());

// 响应用户请求
// app.use((ctx) => {
//   ctx.body = 'Hello Koa';
// });
app.use(router.routes()).use(router.allowedMethods());

// 运行服务器
app.listen(3000);
