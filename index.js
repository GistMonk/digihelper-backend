const express = require("express");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth/auth.js");
const db = require("./db/db");
const app = express();
const BASE = "/api/v1";

app.use(express.json());
app.use(BASE, authRouter);
dotenv.config();
db();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
