const signUpText = (name) => {return `Welcome ${name} to Peekabond We're happy to have you! `}

const suggestionText = (name, email, suggestion) => {return `
<h2>${name} has made an suggestion!</h2>
<p>From: ${email}:</p> 
<p>${suggestion}</p>
    
`}

const passwordResetText = (name) => {return `
<h2>Hello ${name},</h2>
<h3>Your information has changed</h3>
<p>If you haven't made this change, please notify us as soon as possible by sending an email to peekabond@gmail.com<p>
<p>Kind regard,<p>
<p>Team Peekabond</p>
`}


module.exports =  { signUpText, suggestionText, passwordResetText }