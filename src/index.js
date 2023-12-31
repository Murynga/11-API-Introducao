import express from "express";
import dotenv from "dotenv";
import roteadorUsuario from "./routes/usuario.js";
import roteadorLogin from "./routes/login.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(roteadorUsuario);
app.use(roteadorLogin);
dotenv.config();


app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: https://github.com/Murynga/11-API-Introducao",
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});