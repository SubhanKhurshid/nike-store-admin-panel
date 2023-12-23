import { db } from "../db.js";
export const checkOrders = (req, res) => {
  const q = "select * from orders";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

export const getProducts = (req, res) => {
  const q = req.query.cat
    ? `
      SELECT
        p.productID,
        p.productName,
        p.productDes,
        p.productPrice,
        p.productImage,
        c.categoryId,
        c.name AS categoryName,
        co.color_id AS colorId,
        co.color_name AS colorName,
        s.size_id AS sizeId,
        s.size_name AS sizeName
      FROM
        products p
        LEFT JOIN categories c ON p.categoryId = c.categoryId
        LEFT JOIN colors co ON p.colorId = co.color_id
        LEFT JOIN sizes s ON p.sizeId = s.size_id
      WHERE
        p.categoryId = ?
    `
    : `
      SELECT
        p.productID,
        p.productName,
        p.productDes,
        p.productPrice,
        p.productImage,
        c.categoryId,
        c.name AS categoryName,
        co.color_id AS colorId,
        co.color_name AS colorName,
        s.size_id AS sizeId,
        s.size_name AS sizeName
      FROM
        products p
        LEFT JOIN categories c ON p.categoryId = c.categoryId
        LEFT JOIN colors co ON p.colorId = co.color_id
        LEFT JOIN sizes s ON p.sizeId = s.size_id
      WHERE
        p.categoryId IS NOT NULL
    `;

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

export const editData = (req, res) => {
  const productId = req.params.id;

  const query =
    "UPDATE products SET productName= ?, productDes= ?, productPrice= ?, productImage= ?, categoryId = ?, colorId = ?, sizeId = ? WHERE productID= ?";
  const values = [
    req.body.productName,
    req.body.productDes,
    req.body.productPrice,
    req.body.productImg,
    req.body.categoryId,
    req.body.colorId,
    req.body.sizeId,
  ];

  db.query(query, [...values, productId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Data has been updated.");
  });
};

export const addData = (req, res) => {
  const query =
    "INSERT INTO products(productName, productDes, productPrice, categoryId, colorId, sizeId, productImage) VALUES (?)";
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

export const deleteProduct = (req, res) => {
  const productId = req.params.id;
  const q = "DELETE FROM products WHERE productID = ?";

  db.query(q, productId, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Product has been deleted!");
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

export const getReviews = (req, res) => {
  const query = "SELECT * FROM Reviews";
  db.query(query, [req.body.params], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
