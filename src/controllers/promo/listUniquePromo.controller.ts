import { Request, Response } from "express-serve-static-core";
import listUniquePromoService from "../../services/promo/listUniquePromo.service";

const listUniquePromoController = async (req: Request, res: Response) => {
  const id = req.params.id
  const promo = await listUniquePromoService(id);

  return res.status(200).json(promo);
};

export default listUniquePromoController;
