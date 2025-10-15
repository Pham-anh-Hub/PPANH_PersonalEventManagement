import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("server/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);

// Sử dụng port động cho Vercel
const port = process.env.PORT || 8070;
server.listen(port, () => {
  console.log(`✅ JSON Server running on port ${port}`);
});
