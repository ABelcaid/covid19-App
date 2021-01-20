const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

const url = process.env.MONGO_URL;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection is done");
});

const dossierRouter = require("./routes/dossier");
app.use("/dossier", dossierRouter);

const questionRouter = require("./routes/question");
app.use("/question", questionRouter);

const fichePatientRouter = require("./routes/fichePatient");
app.use("/fiche", fichePatientRouter);

app.listen(port, () => {
  console.log(` Server is running on port : ${port}`);
});