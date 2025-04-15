import React from 'react';
import { Link } from 'react-router';

const Post = ({ post }) => {
    const {title,id } = post;
    return (
        <div>
            <p>post title : {title}</p>
            <Link to={`/posts/${id}`}>
                <button>Show more</button>
            </Link>
        </div>
    );
};

export default Post;