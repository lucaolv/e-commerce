import { Router } from "express";
import * as productController from "../controllers/product.controller";

const router = Router();

router.get("/", productController.listProducts);
router.post("/", productController.createNewProduct);

router.get("/:id", productController.getProductDetails);
router.put("/:id", productController.updateExistingProduct);
router.delete("/:id", productController.deleteExistingProduct);

export default router;
