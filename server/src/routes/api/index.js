import { Router } from 'express';
import blogsRouter from './blogs';
import authorsRouter from './authors';
import queriesRouter from './queries';

let router = Router();

router.use('/blogs', blogsRouter);
router.use('/authors', authorsRouter);
router.use('/queries', queriesRouter);

export default router;