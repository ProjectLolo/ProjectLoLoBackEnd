const signUpText = (name) => {return `Welcome ${name} to Peekabond We're happy to have you! `}

const suggestionText = (name, email, suggestion) => {return `
<h2>${name} has made an suggestion!</h2>
<p>From: ${email}:</p> 
<p>${suggestion}</p>
    
`}

const passwordResetText = (name) => {return `Welcome ${name} to Peekabond We're happy to have you! `}


module.exports =  { signUpText, suggestionText, passwordResetText }