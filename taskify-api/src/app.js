import express from "express";
import cookieParser from "cookie-parser";
const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.get("/test", (req, res) => {
  res.send({ message: "Hello, World" });
});

export default app;
