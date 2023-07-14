import Express from "express";
import Color from "colors";
import Cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import userRote from "./Routes/userRoute.js";
import {
  invalidPathHandler,
  errorResponseHandler,
} from "./middleware/errorHandler.js";
import QuestionRoute from "./Routes/questionRoute.js";
import testCaseRoute from "./Routes/testCaseRoute.js";
import SphereEngineRoute from "./Routes/sphereEngineRoute.js";
// config .env
dotenv.config();

// connect to database
connectDB();

// rest objects
const app = Express();
const port = process.env.PORT || 5000;

// allow cross origin request  (Cors) to every  browser
app.use(Cors());

// middleware
app.use(Express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/users", userRote);
app.use("/api/question", QuestionRoute);
app.use("/api/testCase", testCaseRoute);
app.use("/api/sphereEngine", SphereEngineRoute);

// error handling
app.use(invalidPathHandler);
app.use(errorResponseHandler);

// listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgBlue.bold);
});
