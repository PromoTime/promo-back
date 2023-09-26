import { compareSync } from "bcryptjs";
import { prisma } from "../../app";
import ILoginProps from "../../interfaces/login.interface";
import jwt from "jsonwebtoken";
import AppError from "../../errors";

const loginService = async ({ name, password }: ILoginProps) => {
  const query = await prisma.user.findFirst({
    where: {
      name: name
    }
  });

  if (!query) throw new AppError("User not found", 404);

  const compare = compareSync(password, query.password);

  if (!compare) throw new AppError("Incorret password", 409);

  const token = jwt.sign({ name: query.name }, process.env.SECRET_KEY!, {
    expiresIn: "1h",
    subject: query.id,
  });

  return `${token}`;
};

export default loginService;
