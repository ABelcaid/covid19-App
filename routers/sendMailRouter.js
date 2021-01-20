const express = require('express')
const {sendMail, getPage} = require('./../controllers/sendMailController')

const router = express.Router()

// router.get('/', getPage)
router.post('/send', sendMail)

module.exports = router