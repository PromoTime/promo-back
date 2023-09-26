import { z } from "zod";
import { IPromoResponseProps } from "../interfaces/promo.interface";

const createPromoRequestSchema = z.object({
  title: z.string().max(100, "Deve conter no máximo 100 caracteres"),
  market: z.string().max(100, "Deve conter no máximo 100 caracteres"),
  link: z.string(),
  price: z.number(),
  image: z.string(),
});


export const createListPromoResponseSchema = z.object({
  id: z.string(),
  title: z.string(),
  market: z.string(),
  link: z.string(),
  image: z.string(),
  price: z.number(),
  is_active: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const retrievePromosSchema: z.ZodSchema<
  IPromoResponseProps[]
> = z.array(createListPromoResponseSchema);

export const updatePromoRequestSchema =
  createPromoRequestSchema.partial();

export default createPromoRequestSchema;
