require('dotenv').config();
const mysql = require('mysql2/promise');

const connectDB = async () => {
  try {
    const pool = await mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('Database connected successfully');
    return pool;
  } catch (err) {
    console.error('Database connection error', err);
  }
};

module.exports = connectDB;