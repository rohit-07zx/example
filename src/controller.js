import { Router } from "express";
import requestUrl from "./Ibusiness-login.js";

const router = Router();

router.get("/details", async (req, res) => {
  const baseURL = req.body.baseURL;
  console.log(req.body, req.body.options, req.body.terms);

  const response = await requestUrl(
    baseURL,
    null,
    req.body.terms,
    req.body.startingPoint
  );
  res.send({ data: 1 });
});

router.post("/PostAttack", (req, res) => {
  console.log(req.body);
});

export default router;
