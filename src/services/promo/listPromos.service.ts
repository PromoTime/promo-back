import { prisma } from "../../app";
import { retrievePromosSchema } from "../../schemas/promo.schema";

const listPromosService = async (page = 1, pageSize = 12, where: any) => {
  const offset = (page - 1) * pageSize;
  const promos = await prisma.promo.findMany({
    skip: offset,
    take: pageSize,
    where: {
      is_active: true,
      ...where
    },
    orderBy: {
      createdAt: "asc",
    }
  });

  const totalPromos = await prisma.promo.count();

  const pageCount = Math.ceil(totalPromos / pageSize);

  return {
    data: retrievePromosSchema.parse(promos),
    page,
    pageCount,
    total: totalPromos,
  };
};

export default listPromosService;
