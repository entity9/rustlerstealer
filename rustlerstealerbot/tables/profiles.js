const mongoose = require("mongoose");

const members = mongoose.Schema({
  userid: String,
  key: String,
});

module.exports = mongoose.model("Premiums", members);