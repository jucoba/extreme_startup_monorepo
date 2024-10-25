import serverless from "serverless-http";
import express from"express";
import { response } from "./src/responder";
const app = express();
app.use(express.json());
app.use(express.json());



app.get("/", async (req, res, next) => {
    const { q } = req.body;
  return res.status(200).json({
    message: response(q)
  });
});


app.use((req, res, next) => {
  return res.status(404).json({
    error: "Nothing here",
  });
});


exports.handler = serverless(app);
