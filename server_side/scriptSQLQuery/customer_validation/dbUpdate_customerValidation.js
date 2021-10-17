const sql = require("../../db.js");

sql.query(
  "UPDATE davaogulf_group.customer_validation SET valid_id = $1 WHERE cus_validation_id = 7 RETURNING *",
  [`bytea("server_side/assets/valid_id_example2.jpg")`],
  (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
  }
);

sql.end();
