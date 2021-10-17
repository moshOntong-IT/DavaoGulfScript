const sql = require("../../db.js");

sql.query(
  "DELETE FROM davaogulf_group.customer WHERE customer_id = $1 RETURNING *",
  [4],
  (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
  }
);
sql.end();