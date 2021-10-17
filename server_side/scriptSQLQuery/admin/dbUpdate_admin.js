const sql = require("../../db.js");

sql.query(
  "UPDATE davaogulf_group.admin SET admin_fname = $1 WHERE admin_id = 3 RETURNING *",
  ["niks"],
  (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
  }
);

sql.end();