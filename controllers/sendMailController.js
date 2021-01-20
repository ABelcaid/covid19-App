const nodemailer = require('nodemailer')
const logger = require('./../logger')


exports.sendMail = (req, res, next) => {

        const message =   `<p>Your a new Contact request</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.name}</li>
          <li>Company: ${req.body.company}</li>
          <li>email: ${req.body.email}</li>
          <li>phone: ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `;
      
           // Step 1 : create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
          service: "gmail",
          secure: false,
          port: 587,
          auth: {
              user: process.env.EMAIL, // generated ethereal user
              pass: process.env.PASSWORD // generated ethered password
          },
          tls: {
              rejectUnauthorized: false  
          }
      })
      
      
      // Step 2 : Setup email data with unicode symbols
      let mailOptions = {
          from: '"Nodemailer Contact" <your@email.com>', // sender address
          to: 'moustahfidayoub12@gmail.com', // list of receivers
          subject: 'Testing and Testing', // Subject line
          text: 'Hello World morocco to germany !!!!!', // plain text body
          html: message // html body
          // attachments: [
          //     {filename: 'img.jpg', path: './img.jpg'}
          // ]   
      }
      
      // Step 3 : send mail with defined transport object
      transporter.sendMail(mailOptions, (err, data) => {
         if(err) {
             return console.log(err);
         }
         logger.error('Message sent: %s', data.messageId);
         logger.error('Preview URL: %s', nodemailer.getTestMessageUrl(data));
      })
      
   
}


// exports.getPage = (req, res, next) => {
//     then(() => res.render("index", {layout: false}))
// }