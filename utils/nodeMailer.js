const nodemailer = require("nodemailer");
const { MAILJETKEYUSER, MAILJETKEYPASS, MAILPORT } = require("../config/constants");



async function sendMail(email, name, subject, html) {
  let transporter = nodemailer.createTransport({
    host: "in-v3.mailjet.com",
    port: MAILPORT,
    secure: false,
    auth: {
      user: MAILJETKEYUSER,
      pass: MAILJETKEYPASS,
    },
  });

  let info = await transporter.sendMail({
    from: '"Peekabond" <support@peekabond.com>', 
    to: email,
    subject: subject,
    html: html, 
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports =  { sendMail }
