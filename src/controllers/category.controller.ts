import { Request, Response } from "express";
import * as categoryService from "../services/category.service";

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

export const listCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getCategoryDetails = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await categoryService.getCategoryById(id);
    if (!category) {
      return res.status(404).json({ error: "Categoria não encontrada." });
    }
    res.status(200).json(category);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateExistingCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ error: "O nome da categoria é obrigatório." });
    }
    const updatedCategory = await categoryService.updateCategory(id, name);
    res.status(200).json(updatedCategory);
  } catch (error: any) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Categoria não encontrada." });
    }
    res.status(500).json({ error: error.message });
  }
};

export const deleteExistingCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await categoryService.deleteCategory(id);
    res.status(204).send();
  } catch (error: any) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Categoria não encontrada." });
    }
    res.status(500).json({ error: error.message });
  }
};
