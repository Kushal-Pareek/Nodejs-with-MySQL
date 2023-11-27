const connectDB = require('../database/connection');

const addUser = async (user) => {
  const pool = await connectDB();
  const connection = await pool.getConnection();
  const [result] = await connection.execute(
    'INSERT INTO users (fullName, email) VALUES (?, ?)',
    [user.fullName, user.email]
  );
  connection.release();
  return result;
};

module.exports = { addUser };