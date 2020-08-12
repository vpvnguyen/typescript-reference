import express, { Request, Response } from "express";
const app = express();

const PORT: number = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express TS Server");
});

app.listen(PORT, () => console.info(`Express TS Server running on ${PORT}`));
