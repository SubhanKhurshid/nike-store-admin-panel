import { db } from "../db.js";
export const checkOrders = (req, res) => {
  const q = `
    SELECT
      od.order_id,
      o.order_date,
      o.total_amount,
      od.quantity,
      od.size_id,
      od.color_id,
      od.product_id,
      c.categoryId,
      c.name AS categoryName,
      s.size_name,
      co.color_name,
      p.productName,
      p.productDes,
      p.productPrice,
      p.productImage
    FROM
      order_details od
      JOIN orders o ON od.order_id = o.order_id
      LEFT JOIN sizes s ON od.size_id = s.size_id
      LEFT JOIN colors co ON od.color_id = co.color_id
      LEFT JOIN products p ON od.product_id = p.productID
      LEFT JOIN categories c ON p.categoryId = c.categoryId;
  `;

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
    "UPDATE products SET `productName`= ?, `productDes`= ?, `productPrice`= ?, `productImage`= ?, `categoryId` = ?, `colorId` = ?, `sizeId` = ? WHERE `productID`= ?";
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
    "INSERT INTO products(`productName`, `productDes`, `productPrice`, `categoryId`, `colorId`, `sizeId`, `productImage`) VALUES (?)";
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
  const q = "DELETE FROM products WHERE `productID` = ?";

  db.query(q, [productId], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (data.affectedRows === 0) {
      return res.status(404).json("Product not found");
    }

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
