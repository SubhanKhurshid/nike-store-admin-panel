import { db } from "../db.js";

export const addData = (req, res) => {
  const query =
    "INSERT INTO products(`productName`, `productDes`, `productPrice`, `categoryId`, `colorId`, `sizeId`, `productImg`) VALUES (?)";
  const values = [
    req.body.productName,
    req.body.productDes,
    req.body.productPrice,
    req.body.categoryId,
    req.body.colorId,
    req.body.sizeId,
    req.body.productImg,
  ];
  db.query(query, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Data has been added.");
  });
};

export const getCategory = (req, res) => {
  const query = "SELECT * FROM categories";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getColors = (req, res) => {
  const query = "SELECT * FROM colors";
  db.query(query, [req.body.params], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getSizes = (req, res) => {
  const query = "SELECT * FROM sizes";
  db.query(query, [req.body.params], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
