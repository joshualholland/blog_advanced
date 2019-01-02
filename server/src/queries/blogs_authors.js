import { executeQuery } from '../config/db';

const authors = (blogid) => {
    let sql = `call spBlogsAuthors(${blogid})`
    return executeQuery(sql)
};

export default authors;