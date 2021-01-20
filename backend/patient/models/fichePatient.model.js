const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FichePatient = new Schema(
  {
    idPatient: {
      type: String,
      required: true,
      trim: true,
    },
    dateTest: {
      type: String,
      required: true,
      trim: true
    },
    rsTest: {
      type: String,
      default: null,
      trim: true
    }
  },
  {
    versionKey: false
}
);

const FicheEx = mongoose.model("FichePatient", FichePatient);
module.exports = FicheEx;
