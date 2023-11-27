const userRepository = require('../repository/userRepository');

exports.addUser = async (user) => {
    
  const fullName = [user.firstName, user.middleName, user.lastName]
    .filter(Boolean)
    .join(' ');
  
    console.log(fullName);
  return await userRepository.addUser({ fullName, email: user.email });
};