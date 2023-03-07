import express from "express";

const server = express();

server.get("/teste", (_req, res) => {
    res.status(200).send({ message: "Teste" });
})

server.listen(5000, () => {
    console.log("Porta 5000");
});