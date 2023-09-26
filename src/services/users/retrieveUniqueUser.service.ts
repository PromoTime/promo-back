import { prisma } from "../../app";
import { createListUserResponseSchema } from "../../schemas/user.schemas";

const retrieveUniqueUserService = async (userId: string) => {
  const users = await prisma.user.findFirstOrThrow({
    where: {
      id: userId,
    }
  });

  return createListUserResponseSchema.parse(users);
};

export default retrieveUniqueUserService;
