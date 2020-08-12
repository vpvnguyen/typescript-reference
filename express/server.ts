import express from "express";
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Express TS Server");
});

app.listen(PORT, () => console.info(`Express TS Server running on ${PORT}`));
