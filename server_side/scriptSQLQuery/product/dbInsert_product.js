const sql = require('../../db.js');

const insertQuery = `INSERT INTO davaogulf_group.product (product_id,product_name,product_quantity,product_description,supplier_id,date_created,image,weight,price  ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`;
const values = [
    1,
    "Lollipo",
    4,
    "Dli na kaya",
    1,
    2020-09-31,
    `bytea("server_side/assets/valid_id_example.jpg")`,
    24,
    50
];
sql.query(insertQuery, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});
sql.end();