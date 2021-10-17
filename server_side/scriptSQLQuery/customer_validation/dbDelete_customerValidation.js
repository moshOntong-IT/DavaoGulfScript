const sql = require('../../db.js');


const insertQuery = `DELETE from davaogulf_group.customer_validation WHERE cus_validation_id = $1 RETURNING *`;
const values = [
  "7"
];
sql.query(insertQuery, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

sql.end();