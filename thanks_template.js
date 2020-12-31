const Thanks = name => {
	return `
      <!DOCTYPE html>
     <html style="margin: 0; padding: 0;">
     
         <head>
             <title>Thanks</title>
         </head>
     
             <body style="margin: 0; padding: 0;">
             <h4>Dear ${name},</h4>
                <p>Thank you for contacting me. I will get back to you soon!</p>
               <div>Sincerely,</div>
               <br />
               <div>Mohammad Laknahour</div>
             </body>
     
       </html>
      `;
};

module.exports = { Thanks };
