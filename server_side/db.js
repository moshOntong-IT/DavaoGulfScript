const Pool = require("pg").Pool;

const pg = new Pool();


const dbConn = new Pool({
  user: "dcodkzcrgpqiyd",
  password: "0f37e02530f91a565035f99659bfd7892a7eef4992648bf749450fcc1b6e34e4",
  host: "ec2-52-7-159-155.compute-1.amazonaws.com",
  port: "5432",
  database: "d18dbraetqd9jd",
  ssl:{rejectUnauthorized: false},
});

module.exports = dbConn;
