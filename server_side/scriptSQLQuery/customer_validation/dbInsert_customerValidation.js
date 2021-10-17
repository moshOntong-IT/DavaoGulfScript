const sql = require('../../db.js');


const insertQuery = `INSERT into davaogulf_group.customer_validation (valid_id) VALUES($1) RETURNING *`;
const values = [
  `bytea("server_side/assets/valid_id_example.jpg")`
];
sql.query(insertQuery, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

sql.end();