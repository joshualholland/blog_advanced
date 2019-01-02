import React from 'react';
import { Link } from 'react-router-dom';
import MyLogo from './picture/best-programming-habits-to-have.jpg';
import moment from 'moment';

const BlogCard = (props) => {
    return (
        <div className="card col-lg-4 m-3" style={{ display: 'inline-block' }}>
            <img class="card-img-top" src={MyLogo} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.blog.title}</h5>
                <p className="card-text">{props.blog.author}</p>
                <p className="card-text"><i>{moment(props.blog._created).format('MMM DD YYYY')}</i></p>
                <Link to={`/blog/${props.blog.id}`} className="btn" style={{ backgroundColor: '#66fff5', color: 'black' }}>Read More</Link>
            </div>
        </div>
    )
}


export default BlogCard;