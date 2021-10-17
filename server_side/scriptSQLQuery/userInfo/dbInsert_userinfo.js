const sql = require('../../db.js');


const insertQuery = `INSERT INTO davaogulf_group.user_info (username,password) VALUES ($1,$2) RETURNING *`;
const values = [
  "sarah26",
  "sarah123"
];
sql.query(insertQuery, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

sql.end();