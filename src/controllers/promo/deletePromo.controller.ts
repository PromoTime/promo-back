import { Request, Response } from "express-serve-static-core";
import deletePromoService from "../../services/promo/deletePromo.service";


const deletePromoController = async (req: Request, res: Response) => {
  const promoId = req.params.id; 
  await deletePromoService(promoId);

  return res.status(200).json();
};

export default deletePromoController;
