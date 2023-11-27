module.exports = (req, res, next) => {
  const { firstName, lastName, email } = req.body;

  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ message: 'First name, last name, and email are required' });
  } else if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Email must be in valid format' });
  }

  next();
};