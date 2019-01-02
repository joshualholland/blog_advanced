import { Router } from 'express';
import spBlogTags from '../queries/blogtags';
import spBlogsAuthors from '../queries/blogs_authors';

let router = Router();

router.get('/spBlogTags/:id', (req, res) => {
    console.log(req.params.id)
    spBlogTags(req.params.id)
        .then(results => res.send(results[0]))
        .catch(e => console.log(e))
});

router.get('/blogswithauthors/:id', (req, res) => {
    spBlogsAuthors(req.params.id)
        .then(results => res.send(results[0]))
        .catch(e => console.log(e))
});

export default router;