import { Request, Response } from "express-serve-static-core";
import listPromosService from "../../services/promo/listPromos.service";

const listPromosController = async (req: Request, res: Response) => {
  let { page, pageSize, ...where } = req.query;
  if (!page) {
    page = "1";
  }
  if (!pageSize) {
    pageSize = "12";
  }

  const promo = await listPromosService(Number(page), Number(pageSize), where);

  return res.status(200).json(promo);
};

export default listPromosController;
