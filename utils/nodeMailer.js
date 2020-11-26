const nodemailer = require("nodemailer");
const { MAILJETKEYUSER, MAILJETKEYPASS, MAILPORT } = require("../config/constants");
const {signUpText} = require("./email")

async function sendMail(email, name, subject) {
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
    from: '"Peekabond" <weilonglin@me.com>', 
    to: email,
    subject: subject,
    html: signUpText(name), 
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports =  { sendMail }
