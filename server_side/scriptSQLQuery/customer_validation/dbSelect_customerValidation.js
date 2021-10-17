const sql = require('../../db.js');


sql.query("SELECT * FROM davaogulf_group.customer_validation",(err,rst)=>{
    if(err){
        console.log(err.stack);
        throw err;
    }else{
        console.log(rst.rows);
    }
})

sql.end();