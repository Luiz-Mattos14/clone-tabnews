import database from "infra/database.js";

async function status(request, response) {
  console.log("A função status foi chamada");
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log("Resultado da consulta:", result.rows);

  response.status(200).json({
    chave: "Api está funcionando",
  });
}

export default status;
