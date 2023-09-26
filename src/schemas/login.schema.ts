import { z } from "zod";

const loginSchema = z.object({
  name: z.string(),
  password: z.string(),
});

export default loginSchema;
