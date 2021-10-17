const sql = require('../../db.js');

const insertQuery = `INSERT INTO davaogulf_group.admin (admin_fname,admin_mname,user_id) VALUES ($1,$2,$3) RETURNING *`;
const values = [
    "hizon",
    "Caja",
    "4"
];
sql.query(insertQuery, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});
sql.end();