import express, { json, Response } from "express";

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(json());

app.get("/", (_, res: Response): void => {
    res.send("It works!");
});

app.listen(PORT, () => console.debug("Service started at", PORT));
