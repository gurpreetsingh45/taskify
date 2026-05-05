import express from "express";
import authHandler from "./routes/authRoutes.js"
import cookieParser from "cookie-parser";
const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

// Routes

app.use('/api/auth', authHandler);

app.get("/test", (req, res) => {
  res.send({ message: "Hello, World" });
});



export default app;
