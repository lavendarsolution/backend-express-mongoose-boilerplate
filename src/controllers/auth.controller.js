import { User } from "../models/index.js";

export default {
  get: (req, res) => {
    res.json({
      data: [
        {
          id: "sample",
          data: "sample",
        },
      ],
    });
  },
};
