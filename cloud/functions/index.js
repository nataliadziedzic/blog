const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const cors = require('cors')({ origin: true });
require('dotenv').config();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendEmail = functions.https.onRequest((request, response) => {
    // functions.logger.info("Hello logs!", { structuredData: true });
    sgMail.setApiKey(functions.config().sendgrid.key);
    const msg = {
        to: 'plt96974@cuoly.com',
        from: request.body.email, // Use the email address or domain you verified above
        subject: request.body.topic,
        text: request.body.message,
    };
    cors(request, response, () => {
        sgMail.send(msg, (err, res) => {
            if (err) {
                response.send(500)
            }
            else {
                response.send(res)
            }
        })
    })

});
