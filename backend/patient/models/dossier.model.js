const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Dossier = new Schema(
  {
    prenom: {
      type: String,
      required: true,
      trim: true,
      minlenght: 3,
    },
    nom: {
      type: String,
      required: true,
      trim: true,
      minlenght: 3,
    },
    cin: {
      type: String,
      required: true,
      trim: true,
      minlenght: 8,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlenght: 10,
    },
    telephone: {
      type: String,
      required: true,
      trim: true,
      minlenght: 10,
    }
    
  },
  {
    versionKey: false
}
);

const DossierEx = mongoose.model("Dossier", Dossier);
module.exports = DossierEx;
