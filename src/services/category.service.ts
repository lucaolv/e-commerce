// src/services/category.service.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Serviço para criar uma nova categoria
export const createCategory = async (name: string) => {
  return prisma.category.create({
    data: {
      name,
    },
  });
};

// Serviço para listar todas as categorias
export const getAllCategories = async () => {
  return prisma.category.findMany();
};
