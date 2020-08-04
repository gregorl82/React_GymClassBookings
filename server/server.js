const Koa = require("koa");
const KoaRouter = require("koa-router");
const json = require("koa-json");

const PORT = 5000;

const app = new Koa();
const router = new KoaRouter();

app.use(json());

router.get("/test", (ctx) => (ctx.body = { message: "Hello world" }));

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
