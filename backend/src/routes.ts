import { Router } from "express";

const routes = Router();

routes.get("/", (_req, res) => {
  return res.send("Hello World");
});

export default routes;
