const express = require("express");
const router = express.Router();
const News = require("../models/model");

router.route("/create").post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const newNews = new News({ title, content });
  newNews.save();
});

router.route("/showNews").get((req, res) => {
  News.find().then(data => res.json(data));
})

module.exports = router;
