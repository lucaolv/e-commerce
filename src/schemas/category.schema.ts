import { z } from "zod";

export const createCategorySchema = z.object({
  name: z
    .string()
    .nonempty({ message: "O nome é obrigatório." })
    .min(3, { message: "O nome deve ter no mínimo 3 caracteres." }),
});

export const updateCategorySchema = createCategorySchema.partial();
