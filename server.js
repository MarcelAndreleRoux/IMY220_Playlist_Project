import express from "express";

const app = express();

const PORT = 1337;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
