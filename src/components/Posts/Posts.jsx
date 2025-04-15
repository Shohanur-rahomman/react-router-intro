import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const postsData = useLoaderData();

    return (
        <div>
            <p>My post {postsData.length}</p>
            {
                postsData.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;