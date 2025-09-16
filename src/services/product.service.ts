import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProducts = async () => {
  return prisma.product.findMany({
    include: {
      category: true,
    },
  });
};

export const createProduct = async (data: any) => {
  return prisma.product.create({
    data,
  });
};

export const getProductById = async (id: string) => {
  return prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
    },
  });
};

export const updateProduct = async (id: string, data: Partial<Product>) => {
  return prisma.product.update({
    where: { id },
    data,
  });
};

export const deleteProduct = async (id: string) => {
  return prisma.product.delete({
    where: { id },
  });
};
