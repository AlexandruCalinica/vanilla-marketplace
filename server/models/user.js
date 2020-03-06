const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  name: String,
  surname: String,
  password: String,
  cart: [ 
    { 
      item: { type: mongoose.Schema.Types.ObjectId, ref: "Watch" },
      amount: { type: Number }
    }
  ]
})

module.exports = mongoose.model('User', userSchema);