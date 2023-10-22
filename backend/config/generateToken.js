const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'jhdcbkjab12348451AAAAADDskjbh', {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
