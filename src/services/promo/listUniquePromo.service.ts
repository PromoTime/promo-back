import { prisma } from "../../app";
import AppError from "../../errors";

const listUniquePromoService = async (findId: string) => {
  const promo = await prisma.promo.findUnique({
    where: {
      id: findId,
      is_active: true
    }
  });
  if (!promo) {
    throw new AppError("Promo not found", 404);
  }

  return promo;
};

export default listUniquePromoService;
