import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }

    const {title,id } = post;
    return (
        <div>
            <p>post title : {title}</p>
            <Link to={`/posts/${id}`}>
                <button>Show more</button>
            </Link>
            <button onClick={handleNavigate}>Show more1{id }</button>
        </div>
    );
};

export default Post;