import { Router } from 'express';
import Table from '../table';

let blogs = new Table("blogs")

let router = Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        blogs.getOne(id)
            .then(results => res.send(results))
            .catch(e => console.log(e))
    } else {
        blogs.getAll()
            .then(results => res.send(results))
            .catch(e => console.log(e))
    }
});

router.post('/', (req, res) => {
    blogs.insert(req.body)
        .then(results => res.send(results))
        .catch(e => console.log(e))
});

router.delete('/:id?', (req, res) => {
    blogs.delete(req.params.id)
        .then(results => res.send(results))
        .catch(e => console.log(e))
});

router.put('/:id?', (req, res) => {
    blogs.update(req.params.id, req.body)
        .then(results => res.send(results))
        .catch(e => console.log(e))
});

export default router;