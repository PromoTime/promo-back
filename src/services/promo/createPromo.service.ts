import { prisma } from "../../app";
import {
  IPromoRequestProps,
  IPromoResponseProps,
} from "../../interfaces/promo.interface";
import { createListPromoResponseSchema } from "../../schemas/promo.schema";

const createPromoService = async (
  payload: IPromoRequestProps,
): Promise<IPromoResponseProps> => {

  const newAd = await prisma.promo.create({
    data: { ...payload},
  });

  return createListPromoResponseSchema.parse(newAd);
};

export default createPromoService;
