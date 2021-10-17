const sql = require('../../db.js');


const insertQuery = `UPDATE davaogulf_group.user_info SET password = $1 WHERE username = $2 RETURNING *`;
const values = [
  "123",
  "sarah26"
];
sql.query(insertQuery, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

sql.end();