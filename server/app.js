
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const fs = require('fs')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*")
   next()
})

function sendEmail({ firstName, lastName, email, message, number }) {

   return new Promise((resolve, reject) => {

      const fullName = firstName + ' ' + lastName

      const transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
            user: 'alihosaino938@gmail.com',
            pass: 'ltnkdjbsjlwamshc'
         }
      })

      const configs = {
         from: 'alihosaino938@gmail.com',
         to: 'alihosaino985@gmail.com',
         subject: `User ${fullName}, ${number}, ${email}`,
         text: message
      }

      transporter.sendMail(configs, (err, info) => {
         if (err) {
            console.log(err)
            return reject({ message: 'error' })
         }
         return resolve({ message: 'success' })
      })

   })

}

app.post('/send_email', (req, res) => {
   sendEmail(req.body)
   res.json({
      success: true,
      data: { ...req.body }
   })
})

app.listen(port, () => { console.log('listening on port ' + port) })
