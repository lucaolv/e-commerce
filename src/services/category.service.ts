import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCategory = async (name: string) => {
  return prisma.category.create({
    data: {
      name,
    },
  });
};

export const getAllCategories = async () => {
  return prisma.category.findMany();
};

export const getCategoryById = async (id: string) => {
  return prisma.category.findUnique({
    where: { id },
  });
};

export const updateCategory = async (id: string, name: string) => {
  return prisma.category.update({
    where: { id },
    data: { name },
  });
};

export const deleteCategory = async (id: string) => {
  return prisma.category.delete({
    where: { id },
  });
};
