import express from "express";
import userRoute from "./user.route.js";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/users",
    route: userRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
