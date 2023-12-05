import mysql from "mysql2";

export const db = mysql.createConnection({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "subhan123",
  database: "ecommerce",
});
