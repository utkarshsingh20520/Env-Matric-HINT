let User = require("../models/User.js");
const path = require("path");
const Post = require("../models/Post");

exports.uploadImage = (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const date = req.body.date;
  const photo = req.file.filename;
  const location = req.body.location;
  const newUserData = {
    name,
    photo,
    description,
    date,
    location,
  };

  const newUser = new User(newUserData);

  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error: " + err));
};
