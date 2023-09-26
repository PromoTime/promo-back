import { prisma } from "../../app";
import { IPromoResponseProps, IPromoUpdateRequestProps } from "../../interfaces/promo.interface";
import { createListPromoResponseSchema } from "../../schemas/promo.schema";

const updatePromoService = async (payload: IPromoUpdateRequestProps, adId:string): Promise<IPromoResponseProps> => {

  const updatedPromo = await prisma.promo.update({
    where: { id: adId },
    data: { ...payload },
  });

  return createListPromoResponseSchema.parse(updatedPromo);
};

export default updatePromoService;
