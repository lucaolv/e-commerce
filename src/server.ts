// src/server.ts
import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes";
import categoryRoutes from "./routes/category.routes"; // <-- Importe as rotas de categoria

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Use as rotas com prefixos
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes); // <-- Conecte as novas rotas

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
