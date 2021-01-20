const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Question = new Schema(
  {
    fievre: {
      type: String,
      required: true,
      trim: true,
      minlenght: 3,
    },
    toux_seche: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3,
      },
      difficultes_a_respirer: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3,
      },
      maux_de_gorge: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3,
      },
      rhinite: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3,
      },
      douleur_dans_les_muscles: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3,
      },
      fatigue: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3,
      },
      maux_de_tete: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3,
      },
      diarrhees: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3,
      },
      nausees_vomissement: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3,
      },
      anosmie: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3,
      },
      agueusie: {
        type: String,
        required: true,
        trim: true,
        minlenght: 3,
      },
      dossierId:{
        type:String, 
        required: true,
        ref:'Dossier'
      }
  },
  {
    versionKey: false
}
);

const QuestionEx = mongoose.model("Question", Question);
module.exports = QuestionEx;
