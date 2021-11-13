import express, { json, Response } from "express";

const app = express();

app.use(json());

app.get("/", (_, res: Response): void => {
    res.send("It works!");
});

app.listen(80, () => console.debug("Service started"));
