// src/controllers/category.controller.ts
import { Request, Response } from "express";
import * as categoryService from "../services/category.service";

// Controlador para criar uma categoria
export const createNewCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ error: "O nome da categoria é obrigatório." });
    }
    const newCategory = await categoryService.createCategory(name);
    res.status(201).json(newCategory);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para listar categorias
export const listCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
