import { executeQuery } from '../config/db';

const blogtag = (blogid) => {
    let sql = `call spBlogTags(${blogid})`;
    return executeQuery(sql)
};

export default blogtag;