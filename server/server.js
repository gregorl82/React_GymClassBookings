const Koa = require("koa");
const KoaRouter = require("koa-router");
const json = require("koa-json");

const app = new Koa();
const router = new KoaRouter();

const PORT = 5000;

app.use(json());

// app.use(async (ctx) => (ctx.body = { message: "Hello world" }));

router.get("/test", (ctx) => (ctx.body = { message: "Hello world" }));

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
