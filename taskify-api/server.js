import app from "./src/app.js";
import { HTTP_PORT } from "./src/config/env.js";
import connectDB from "./src/config/db.js";

async function startServer() {
  try {
    await connectDB();
    app.listen(HTTP_PORT, () => console.log(`Listening on Port ${HTTP_PORT}`));
  } catch (err) {
    console.error(`Error : ${err}`);
    process.exit(1);
  }
}

startServer();
