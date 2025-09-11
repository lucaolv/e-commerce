// src/controllers/product.controller.ts
import { Request, Response } from "express";
import * as productService from "../services/product.service";

// Controlador para listar produtos
export const listProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para criar um produto
export const createNewProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
