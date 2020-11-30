const signUpText = (name) => {return `Welcome ${name} to Peekabond We're happy to have you! `}

const suggestionText = (name, email, suggestion) => {return `
<h2>${name} has made an suggestion!</h2>
<p>From: ${email}:</p> 
<p>${suggestion}</p>
    
`}

const detailChangeText = (name) => {return `
<h2>Hello ${name},</h2>
<h3>Your information has changed</h3>
<p>If you haven't made this change, please notify us as soon as possible by sending an email to peekabond@gmail.com<p>
<p>Kind regards,<p>
<p>Team Peekabond</p>
`}

const passwordResetText = (name, newPassword) => {return `
<h2>Hello ${name},</h2>
<h3>Your password has been reset</h3>
<h4>New password: ${newPassword}</h4>
<h5>We strongly urge you to change your password upon login.</h5>
<p>If you haven't made this change, please notify us as soon as possible by sending an email to peekabond@gmail.com<p>
<p>Kind regards,<p>
<p>Team Peekabond</p>
`}


module.exports =  { signUpText, suggestionText, passwordResetText, detailChangeText }