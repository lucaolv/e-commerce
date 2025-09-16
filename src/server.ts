import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes";
import categoryRoutes from "./routes/category.routes";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
