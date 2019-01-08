import { Router } from 'express';
import { sendEmail } from '../utils/mail';
let router = Router();

router.post('/message', (req, res, next) => {
    let messageBody =  `Name: ${req.body.name} 
                        Email: ${req.body.email}
                        message: ${req.body.message} `
    sendEmail('joshualholland@gmail.com', 'no-reply-mg@covalence.io', 'Testing Contact form', messageBody)
    .then((response) => {
        res.sendStatus(201);
    }).catch((err) => {
        next(err)
    })
});

export default router;