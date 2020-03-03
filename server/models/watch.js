const mongoose = require("mongoose");

const watchSchema = mongoose.Schema({
  price: { type: mongoose.Types.Decimal128 },
  name: String,
  description: String,
  image: String,
  info: {
    listingNumber: Number,
    referenceNumber: Number,
    model: String,
    brand: String,
    year:  Number,
    gender: String
  },
  calibre: {
    powerReserve: String,
    movement: String,
    movementPerCalibre: Number,
  },
  case: {
    material: String,
    diameter: Number,
    glass: String,
  },
  strap: {
    material: String,
    braceletColor: String,
  }
});

watchSchema.index({'$**': 'text'});

module.exports = mongoose.model("Watch", watchSchema);