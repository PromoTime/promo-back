import { Router } from "express";
import { validateSchemasMiddleware } from "../middleware";

import loginSchema from "../schemas/login.schema";
import loginController from "../controllers/login";

const loginRoute = Router();

loginRoute.post(
  "",
  validateSchemasMiddleware(loginSchema),
  loginController
);

export default loginRoute;
