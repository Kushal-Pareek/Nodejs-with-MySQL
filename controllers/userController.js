const userService = require('../services/userService');

exports.addUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await userService.addUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};