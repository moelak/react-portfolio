const Hello = (textarea, subject) => {
	return `
	  <!DOCTYPE html>
	 <html style="margin: 0; padding: 0;">

	     <head>
	         <title>Hello</title>
	     </head>

			 <body style="margin: 0; padding: 0;">
			 <h2>${subject}</h2>
	            <div style="width: 850px;">${textarea}</div>
	            <br />
	         </body>
	   </html>
	  `;
};

module.exports = { Hello };
