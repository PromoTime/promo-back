import { Request, Response } from "express-serve-static-core";
import createPromoService from "../../services/promo/createPromo.service";

const createPromoController = async (req: Request, res: Response) => {
  const {galery, ...payload} = req.body
  const newPromo = await createPromoService(payload);

  return res.status(201).json(newPromo);
};

export default createPromoController;
