import express from "express";
import dotenv from "dotenv";

const app = express();
const port = 3000;

app.use(express.json());
dotenv.config();


app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD Walisson: https://github.com/Murynga/11-API-Introducao",
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});