import express from "express";
import { addData } from "../controllers/data.js";
import { getCategory } from "../controllers/data.js";
import { getColors } from "../controllers/data.js";
import { getSizes } from "../controllers/data.js";
const router = express.Router();

router.post("/", addData);
router.get("/categories", getCategory);
router.get("/colors", getColors);
router.get("/sizes", getSizes);

export default router;
