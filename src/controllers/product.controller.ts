import { Request, Response } from "express";
import * as productService from "../services/product.service";
import { z } from "zod";
import {
  createProductSchema,
  updateProductSchema,
} from "../schemas/product.schema";

export const listProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewProduct = async (req: Request, res: Response) => {
  try {
    const validatedData = createProductSchema.parse(req.body);

    const newProduct = await productService.createProduct(validatedData);
    res.status(201).json(newProduct);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.flatten().fieldErrors });
    }
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export const getProductDetails = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }
    res.status(200).json(product);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateExistingProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validatedData = updateProductSchema.parse(req.body);

    const updatedProduct = await productService.updateProduct(
      id,
      validatedData
    );
    res.status(200).json(updatedProduct);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.flatten().fieldErrors });
    }
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Produto não encontrado." });
    }
    res.status(500).json({ error: error.message });
  }
};

export const deleteExistingProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    res.status(204).send();
  } catch (error: any) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Produto não encontrado." });
    }
    res.status(500).json({ error: error.message });
  }
};
