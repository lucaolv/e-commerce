// src/routes/category.routes.ts
import { Router } from "express";
import * as categoryController from "../controllers/category.controller";

const router = Router();

router.post("/", categoryController.createNewCategory);
router.get("/", categoryController.listCategories);

export default router;
