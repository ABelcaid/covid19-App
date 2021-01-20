const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

require("dotenv").config();


// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())



mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

// const url = process.env.MONGO_URL;
// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB connection is done");
// });














const dossierRouter = require("./routes/dossier");
app.use("/dossier", dossierRouter);

const questionRouter = require("./routes/question");
app.use("/question", questionRouter);

const fichePatientRouter = require("./routes/fichePatient");
app.use("/fiche", fichePatientRouter);

// app.listen(port, () => {
//   console.log(` Server is running on port : ${port}`);
// });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})