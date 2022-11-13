import { assertIsDefined } from "../utils/helpers.js";

const { MONGO_URL, MONGO_DATABASE } = process.env;

assertIsDefined(MONGO_DATABASE, "MONGO_DATABASE");
assertIsDefined(MONGO_URL, "MONGO_URL");

const config = {
  MONGO_URL,
  MONGO_DATABASE,
  db: {
    dbName: MONGO_DATABASE,
    autoIndex: true,
  },
};

export default config;
