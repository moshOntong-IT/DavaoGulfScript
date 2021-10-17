const sql = require('../../db.js');


const insertQuery = `DELETE from davaogulf_group.user_info WHERE username = $1 RETURNING *`;
const values = [
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