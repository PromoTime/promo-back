import { prisma } from "../../app";

const deletePromoService = async (adId:string): Promise<void> => {

  const updatedAd = await prisma.promo.update({
    where: { id: adId },
    data: {is_active: false}
  });
  
};

export default deletePromoService;
