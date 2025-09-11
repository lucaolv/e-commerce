// src/routes/product.routes.ts
import { Router } from "express";
import * as productController from "../controllers/product.controller";

const router = Router();

// Rota para obter todos os produtos (GET /api/products)
router.get("/", productController.listProducts);

// Rota para criar um novo produto (POST /api/products)
router.post("/", productController.createNewProduct);

export default router;
