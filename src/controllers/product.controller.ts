import { Request, Response } from "express";
import * as productService from "../services/product.service";

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
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
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
    const updatedProduct = await productService.updateProduct(id, req.body);
    res.status(200).json(updatedProduct);
  } catch (error: any) {
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
