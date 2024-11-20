import serverless from "serverless-http";
import express from"express";
import { response } from "./src/responder";
const app = express();
app.use(express.json());
app.use(express.json());



app.get("/", async (req, res, next) => {
  console.log("Question: ", req.query.q);
  const query  = req.query.q?.toString()
  if (query)
    return res.status(200).send(response(query));
  return res.status(400).send("No query");
});


app.use((req, res, next) => {
  return res.status(404).json({
    error: "Nothing here",
  });
});


exports.handler = serverless(app);
