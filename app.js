const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const logger = require('./logger')


const app =express()



// View Engine setup
app.set('view engine', "handlebars")
app.engine("handlebars", expressHandlebars())

require('dotenv').config()


// Body Parser Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


const sendMailRouter = require('./routers/sendMailRouter');

app.use('/api', sendMailRouter)




app.listen(4000, () =>{ 
   logger.error('Server running .........')
})
