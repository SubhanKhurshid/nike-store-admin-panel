import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import dataRoutes from "./routes/data.js";
import multer from "multer";
import { diskStorage } from "multer";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/upload", express.static(path.join(__dirname, "upload")));

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../api/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);

app.listen(5000, () => {
  console.log("Connected to Server.");
});
