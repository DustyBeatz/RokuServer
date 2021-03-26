const creds = require("./userConfig");
const sql = require('mysql');

//these are the same connect data that uou would use in php connect scripts
//we want to obscure them a bit for a security reason. (normally these would be)
//saved in a .env file
//and then read in the runtime / create time

const connection = sql.createPool({
    connectionLimit : 10,
    host            : creds.host,
    user            : creds.user,
    password        : creds.password,
    port            : creds.port,
    database        : creds.database
  });

  module.exports = connection; 