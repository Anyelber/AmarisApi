const db = require("../controllers/mysql.controller");
const jwt = require("../controllers/tokens.controller");

const getSlidersInfo = async (token, cb = () => {}) => {
  let userId, userRol;

  await userData(token).then((e) => {
    userId = JSON.parse(e).data.user_id;
  });

  await getUserRol(userId).then((e) => {
    userRol = e;
  });

  await db.query(
    "SELECT slider_data.id, slider_data.agency_store_name, slider_data.description, slider_data.image, CONCAT(users.name,' ',users.last_name) as created_by, slider_data.created_at  FROM slider_data INNER JOIN users ON users.id = slider_data.created_by WHERE slider_data.deleted_at IS NULL",
    [],
    (err, results, fields) => {
      if (err) {
        cb(err);
        return false;
      }
      console.log(results);

      cb(null, results);
    }
  );
};

const saveSliderInfo = async (
  token,
  agency_store_name,
  description,
  image,
  cb = () => {}
) => {
  let userId, userRol;

  await userData(token).then((e) => {
    userId = JSON.parse(e).data.user_id;
  });

  await getUserRol(userId).then((e) => {
    userRol = e;
  });

  if (userRol >= 1) {
    db.query(
      "INSERT INTO slider_data (agency_store_name, description, image, created_by, created_at, updated_at) VALUES (?,?,?,?,NOW(),NOW())",
      [agency_store_name, description, image, userId],
      function (err, results) {
        if (err) {
          cb(err);
        }

        let response = {
          result: true,
          msg: "Slider Info created successfull",
        };

        cb(null, response);
      }
    );
  } else {
    let error = {
      result: false,
      msg: "You don't have access to this module",
    };
    cb(error);
  }
};

const updateSliderInfo = async (
  token,
  id,
  agency_store_name,
  description,
  image,
  cb = () => {}
) => {
  let userId, userRol;

  await userData(token).then((e) => {
    userId = JSON.parse(e).data.user_id;
  });

  await getUserRol(userId).then((e) => {
    userRol = e;
  });

  if (userRol >= 1) {
    db.query(
      "UPDATE slider_data SET agency_store_name = ?, description = ?, image = ? WHERE id = ?",
      [agency_store_name, description, image, id],
      function (err, results) {
        if (err) {
          cb(JSON.stringify(err));
        }

        let response = {
          result: true,
          msg: "Slider Info updated successfull",
        };

        cb(null, response);
      }
    );
  } else {
    let error = {
      result: false,
      msg: "You don't have access to this module",
    };
    cb(error);
  }
};

const deleteSliderInfo = async (token, id, cb = () => {}) => {
  let userId, userRol;

  await userData(token).then((e) => {
    userId = JSON.parse(e).data.user_id;
  });

  await getUserRol(userId).then((e) => {
    userRol = e;
  });

  if (userRol >= 1) {
    db.query(
      "UPDATE slider_data SET deleted_at = NOW() WHERE id = ?",
      [id],
      function (err, results) {
        if (err) {
          cb(JSON.stringify(err));
        }

        let response = {
          result: true,
          msg: "Slider Info deleted successfull",
        };

        cb(null, response);
      }
    );
  } else {
    let error = {
      result: false,
      msg: "You don't have access to this module",
    };
    cb(error);
  }
};

//helpers

function userData(token) {
  return new Promise((resolve, reject) => {
    jwt.verifyToken(token, async (err, dec) => {
      if (err) {
        console.log(err);
        return false;
      }

      resolve(dec);
    });
  });
}

function getUserRol(id) {
  return new Promise((resolve, reject) => {
    db.query("SELECT rol FROM users WHERE id = ?", [id], (err, results) => {
      if (err) {
        cb(err);
        return false;
      }

      resolve(results[0].rol);
    });
  });
}

//exports

module.exports = {
  getSlidersInfo,
  saveSliderInfo,
  updateSliderInfo,
  deleteSliderInfo,
};
