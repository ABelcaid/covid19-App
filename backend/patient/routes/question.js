const router = require("express").Router();
let Question = require("../models/question.model");
const logger = require('../config/logger')


router.route("/").get((req, res) => {
  Question.find()
    .then((question) => res.json(question))
    .catch((err) => 
    res.status(400).json("Error :" + err));
});


router.route("/add").post((req, res) => {
  const fievre = req.body.q1;
  const toux_seche = req.body.q2;
  const difficultes_a_respirer = req.body.q3;
  const maux_de_gorge = req.body.q4;
  const rhinite = req.body.q5;
  const douleur_dans_les_muscles = req.body.q6;
  const fatigue = req.body.q7;
  const maux_de_tete = req.body.q8;
  const diarrhees = req.body.q9;
  const nausees_vomissement = req.body.q10;
  const anosmie = req.body.q11;
  const agueusie = req.body.q12;
  const dossierId = req.body.dossierId;
 

  const questionPush = new Question({
    fievre,
    toux_seche,
    difficultes_a_respirer,
    maux_de_gorge,
    rhinite,
    douleur_dans_les_muscles,
    fatigue,
    maux_de_tete,
    diarrhees,
    nausees_vomissement,
    anosmie,
    agueusie,
    dossierId
  });

  questionPush
    .save()
    .then(() => res.json("Question successfully added"))
    .catch((err) => res.status(400).json("Error :" + err));
});


// router.route("/:id").get((req, res) => {
//   Question.findById(req.params.id)
//     .then((question) => res.json(question))
//     .catch((err) => res.status(400).json("Error :" + err));
// });

router.route("/:dossierId").get((req, res) => {
  // res.send("tagId is set to " + req.params.dossierId);
  Question.findOne({dossierId: `${req.params.dossierId}`})
    .then((question) => res.json(question))
    .catch((err) =>
     res.status(400).json("Error :" + err));
});


module.exports = router;
