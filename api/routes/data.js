import express from "express";
import {
  addData,
  checkOrders,
  deleteProduct,
  editData,
  getProducts,
  getReviews,
} from "../controllers/data.js";
import { getCategory } from "../controllers/data.js";
import { getColors } from "../controllers/data.js";
import { getSizes } from "../controllers/data.js";

const router = express.Router();

router.get("/check-orders", checkOrders);
router.get("/view-products", getProducts);
router.post("/", addData);
router.get("/categories", getCategory);
router.get("/colors", getColors);
router.get("/sizes", getSizes);
router.delete("/view-products/:id", deleteProduct);
router.put("/edit-product/:id", editData);
router.get("/reviews", getReviews);

export default router;
