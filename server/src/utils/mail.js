import mailgunLoader from 'mailgun-js';

require('dotenv').config()
let mailgun = mailgunLoader({apiKey: process.env.MAILGUN_API_KEY, domain: 'sandboxe05aec72fc534e5a9f28d01a5c873335.mailgun.org'});

function sendEmail(to, from, subject, content) {
    let data = {
        to,
        from,
        subject,
        html: content
    };

    return mailgun.messages().send(data)
}


export { sendEmail };