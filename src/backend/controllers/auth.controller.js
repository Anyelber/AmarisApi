const db = require("../controllers/mysql.controller");
const bcrypt = require("bcryptjs");
const jwt = require("../controllers/tokens.controller");

this.results;
this.fields;

const login = async (email, password, cb = () => {}) => {
  await db.query(
    "SELECT id, email, password FROM users WHERE email = ?",
    [email],
    function (err, results) {
      if (err) {
        cb(err);
      }

      if (results.length > 0) {
        if (bcrypt.compareSync(password, results[0].password)) {
          let token = jwt.createToken(results[0].id, results[0].email);

          let resp = {
            result: true,
            msg: "Authentification successfull",
            token: token,
          };

          db.query("UPDATE users SET token = ? WHERE email = ?", [
            token,
            email,
          ]);
          cb(null, JSON.stringify(resp));
        } else {
          let resp = {
            result: false,
            msg: "Invalid authentification",
          };
          cb(null, JSON.stringify(resp));
        }
      } else {
        let resp = {
          result: false,
          msg: "Invalid authentification " + email,
        };
        cb(null, JSON.stringify(resp));
      }
    }
  );
};

module.exports = {
  login,
};
