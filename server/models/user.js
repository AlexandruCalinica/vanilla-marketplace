const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  name: String,
  surname: String,
  password: String,
  cart: [ { type: mongoose.Schema.Types.ObjectId, ref: "Watch" } ]
})

module.exports = mongoose.model('User', userSchema);