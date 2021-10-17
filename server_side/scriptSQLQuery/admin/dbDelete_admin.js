const sql = require('../../db.js');

sql.query("DELETE FROM davaogulf_group.admin WHERE admin_id = $1 RETURNING *",
    [1],
    (err,res)=>{
    if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
