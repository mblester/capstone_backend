const mysql = require("mysql");

require("dotenv").config();

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("Creating connection pool...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      return this.pool;
    }
    return this.pool;
  }
}

const instance = new Connection();
module.exports = instance;
