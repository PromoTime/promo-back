import { Request, Response } from "express-serve-static-core";
import updatePromoService from "../../services/promo/updatePromo.service";


const updatePromoController = async (req: Request, res: Response) => {
  const promoId = req.params.id; 
  const updatedPromo = await updatePromoService(req.body,promoId);

  return res.status(200).json(updatedPromo);
};

export default updatePromoController;
