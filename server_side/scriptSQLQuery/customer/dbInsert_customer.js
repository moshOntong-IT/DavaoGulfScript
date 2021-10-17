const sql = require("../../db.js");

const insertQuery =
  "INSERT INTO davaogulf_group.customer(customer_fname,customer_mname,customer_lname,contact_num,email,user_id,cus_validation_id) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *";
const values = [
  "mike",
  "m",
  "Mikeryski",
  "0912345678",
  "jazzwatersri@yahoo.com",
  "1",
  "1",
];

sql.query(insertQuery, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});
