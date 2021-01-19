const express = require('express');
const bodyParser = require('body-parser');

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');


const app = express()
const port = 3000


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


app.get('/', (req, res) => {
  res.json({"message": "Welcome to ExpressMongoApp application. Created by IT Jugadu"});
})







// ........

// Require Notes routes
require('./app/routes/question.routes.js')(app);

// ........

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})