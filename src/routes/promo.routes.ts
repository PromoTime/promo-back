import { Router } from "express";
import { validateSchemasMiddleware, validateTokenMiddleware } from "../middleware";
import createPromoRequestSchema, { updatePromoRequestSchema } from "../schemas/promo.schema";
import createPromoController from "../controllers/promo/createPromo.controller";
import listPromosController from "../controllers/promo/listPromos.controller";
import listUniquePromoController from "../controllers/promo/listUniquePromo.controller";
import updatePromoController from "../controllers/promo/updateAd.controller";
import deletePromoController from "../controllers/promo/deletePromo.controller";

const promosRoutes = Router();

promosRoutes.post(
  "",
  validateTokenMiddleware,
  validateSchemasMiddleware(createPromoRequestSchema),
  createPromoController
);

promosRoutes.get("", listPromosController);

promosRoutes.get("/:id", listUniquePromoController);

promosRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  validateSchemasMiddleware(updatePromoRequestSchema),
  updatePromoController
);

promosRoutes.delete(
  "/:id",
  validateTokenMiddleware,
  deletePromoController
);

export default promosRoutes;
