import express from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import passport from "passport";
import httpStatus from "http-status";

import routes from "./routes/index.js";

import { errorHandler } from "./middlewares/error.js";
import ApiError from "./utils/ApiError.js";

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

app.use("/v1", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
// app.use(errorConverter);

// handle error
app.use(errorHandler);

export default app;
