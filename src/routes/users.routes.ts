import { Router } from "express";
import {
  createUserController,
  retrieveUsersController,
  updateUserController,
  deleteUserController,
  retrieveUniqueUserController,
} from "../controllers/users";
import {
  validateSchemasMiddleware, validateTokenMiddleware,

} from "../middleware";
import { createUserRequestSchema, updateUserRequestSchama } from "../schemas/user.schemas";


const usersRoutes = Router();

usersRoutes.get("", retrieveUsersController);
usersRoutes.get(
  "/profile",
  validateTokenMiddleware,
  retrieveUniqueUserController
);
usersRoutes.get(
  "/:id",
  retrieveUniqueUserController
);
usersRoutes.post(
  "",
  validateSchemasMiddleware(createUserRequestSchema),
  createUserController
);
usersRoutes.patch(
  "/profile",
  validateTokenMiddleware,
  validateSchemasMiddleware(updateUserRequestSchama),
  updateUserController
);
usersRoutes.delete("/profile", validateTokenMiddleware, deleteUserController);

export default usersRoutes;
