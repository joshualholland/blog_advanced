import { Router } from 'express';
import authRouter from './auth';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';
import contactRouter from './contact';
import stripeRouter from './stripeDonations';

import apiRouter from './api';

let router = Router();

router.use('/auth', authRouter);
router.use('/contact', contactRouter);
router.use('/donate', stripeRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/', apiRouter);



export default router;