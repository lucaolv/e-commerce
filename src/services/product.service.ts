// src/services/product.service.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Serviço para listar todos os produtos
export const getAllProducts = async () => {
  return prisma.product.findMany({
    // Inclui a categoria relacionada a cada produto no resultado
    include: {
      category: true,
    },
  });
};

// Serviço para criar um novo produto
// 'data' será o corpo da requisição (req.body) que virá do controller
export const createProduct = async (data: any) => {
  return prisma.product.create({
    data,
  });
};
