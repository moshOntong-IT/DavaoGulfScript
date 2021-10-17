const sql = require("../../db.js");

sql.query(
  "UPDATE davaogulf_group.customer SET customer_fname = $1 WHERE customer_id = 4 RETURNING *",
  ["STEVERS"],
  (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
  }
);

sql.end();
