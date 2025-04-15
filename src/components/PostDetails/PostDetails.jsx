import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    
    return (
        <div>
            <p>post details</p>
            <p>Id : {post.userId }</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;