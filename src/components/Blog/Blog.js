import React from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
    const {id} = useParams()
    return (
        <div className="container my-5">
            <h1>Blog id : {id} </h1>
        </div>
    );
};

export default Blog;