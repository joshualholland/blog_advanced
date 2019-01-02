import { Router } from 'express';
import authRouter from './auth';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';
import blogsRouter from './blogs';
import queriesRouter from './queries';

let router = Router();

router.use('/auth', authRouter);


router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/queries', queriesRouter);
router.use('/blogs', blogsRouter);


export default router;