import { z } from "zod";
import {
  IUserResponseProps,
} from "../interfaces/user.interfaces";

export const createUserRequestSchema = z.object({
  name: z.string().max(50, "Deve conter no máximo 50 caracteres"),
  password: z.string().max(120, "Máximo de 120 caracteres"),
});

export const createListUserResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const retrieveUsersSchema: z.ZodSchema<IUserResponseProps[]> = z.array(
  createListUserResponseSchema
);

export const updateUserRequestSchama = createListUserResponseSchema
  .omit({
    createdAt: true,
    updatedAt: true,
  })
  .partial();


