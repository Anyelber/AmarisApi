const { Router } = require("express");
const bcrypt = require("bcryptjs");
const authController = require(__dirname + "/../controllers/auth.controller");
const tokensController = require(__dirname +
  "/../controllers/tokens.controller");
const sliderController = require(__dirname +
  "/../controllers/slider.controller");
const express = require("express");

let route = express.Router();

route.use(express.json());

route.post("/auth", async (req, res) => {
  const { email, password } = req.body;
  authController.login(email, password, (err, resp) => {
    if (err) {
      res.send(err);
    }

    res.send(resp);
  });
});

route.post("/verifyToken", async (req, res) => {
  const { token } = req.body;
  tokensController.verifyToken(token, (err, resp) => {
    if (err) {
      res.send(err);
    }

    res.send(resp);
  });
});

route.post("/getSlidersInfo", async (req, res) => {
  const { token } = req.body;
  sliderController.getSlidersInfo(token, (err, ares) => {
    if (err) {
      res.send(err);
      return false;
    }
    res.send(ares);
  });
});

route.post("/saveSliderInfo", async (req, res) => {
  const { token, agency_store_name, description, image } = req.body;
  sliderController.saveSliderInfo(
    token,
    agency_store_name,
    description,
    image,
    (err, ares) => {
      if (err) {
        res.send(err);
        return false;
      }
      res.send(ares);
    }
  );
});

route.post("/updateSliderInfo", async (req, res) => {
  const { token, id, agency_store_name, description, image } = req.body;
  sliderController.updateSliderInfo(
    token,
    id,
    agency_store_name,
    description,
    image,
    (err, ares) => {
      if (err) {
        res.send(err);
        return false;
      }
      res.send(ares);
    }
  );
});

route.post("/deleteSliderInfo", async (req, res) => {
  const { token, id } = req.body;
  sliderController.deleteSliderInfo(token, id, (err, ares) => {
    if (err) {
      res.send(err);
      return false;
    }
    res.send(ares);
  });
});

module.exports = route;
