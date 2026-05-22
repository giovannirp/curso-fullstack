const express = require("express");
const app = express();

const PORT = 3000; // Executar na porta 3000

// Rota principal
app.get("/", (req, res) => {
    res.send("Rota principal");
});

app.get("/teste", (req, res) => {
    res.send("Rota do SENAI TESTE");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});