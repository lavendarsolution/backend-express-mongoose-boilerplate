import mongoose from "mongoose";
import config from "./config/index.js";
import app from "./app.js";

const port = 3000;

mongoose
  .connect(config.MONGO_URL, config.db)
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
