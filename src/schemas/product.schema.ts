import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "O nome é obrigatório." })
    .min(3, { message: "O nome deve ter no mínimo 3 caracteres." }),

  description: z.string().nonempty({ message: "A descrição é obrigatória." }),

  price: z
    .number()
    .positive({ message: "O preço deve ser um número positivo." }),

  stock: z
    .number()
    .int()
    .min(0, { message: "O estoque não pode ser negativo." }),

  categoryId: z
    .string()
    .nonempty({ message: "A categoria é obrigatória." })
    .uuid({ message: "O ID da categoria deve ser um UUID válido." }),
});

export const updateProductSchema = createProductSchema.partial();
