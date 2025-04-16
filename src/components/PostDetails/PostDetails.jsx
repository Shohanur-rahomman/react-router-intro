import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const navigate = useNavigate();
    const post = useLoaderData();

    const handleBack = () => {
        navigate(-1)
    }

    
    return (
        <div>
            <p>post details</p>
            <p>Id : {post.userId }</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;