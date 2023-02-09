require("dotenv").config();
const jwt = require("jsonwebtoken");
const db = require("../controllers/mysql.controller");

const verifyToken = async (token, cb = () => {}) => {
  try {
    await db.query(
      "SELECT * FROM users WHERE token = ?",
      [token],
      async (err, results) => {
        if (err) {
          cb(err);
          return false;
        }

        if (results.length > 0) {
          let dec = jwt.decode(token);

          let res = {
            result: true,
            msg: "Valid token you can continue.",
            data: dec,
          };

          cb(null, JSON.stringify(res));
        } else {
          let res = {
            result: false,
            msg: "the token is invalid.",
          };

          cb(null, JSON.stringify(res));
        }
      }
    );
  } catch (err) {
    console.log(err);
    cb(err);
  }
};

const createToken = (userid, email) => {
  let token = jwt.sign(
    {
      user_id: userid,
      email: email,
    },
    process.env.TOKEN_KEY,
    {
      expiresIn: process.env.TOKEN_EXPIRE,
    }
  );

  return token;
};

module.exports = {
  verifyToken,
  createToken,
};
