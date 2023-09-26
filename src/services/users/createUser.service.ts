import { IUserRequestProps } from "../../interfaces/user.interfaces";
import { prisma } from "../../app";
import { hashSync } from "bcryptjs";
import { createListUserResponseSchema } from "../../schemas/user.schemas";
import AppError from "../../errors";

const createUserService = async (user: IUserRequestProps) => {

  // const findUser = await prisma.user.findFirst({
  //   where:{
  //    name:  user.name
  //   }
  // })
  // if(findUser){
  //   throw new AppError("User already exist", 409)
  // }

  const newUser = await prisma.user.create({
    data: { ...user, password: hashSync(user.password, 12) },
  });

  return createListUserResponseSchema.parse(newUser);
};

export default createUserService;
