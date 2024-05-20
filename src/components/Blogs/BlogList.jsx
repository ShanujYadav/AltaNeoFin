import React from 'react';
import { Link } from 'react-router-dom';
import BlogItem from './BlogItem';
import './BlogList.css';

const BlogList = ({ blogs }) => (
  <div className='blogList-wrap'>
    {blogs.map(blog => (
      <Link key={blog.id} to={`/blog/${blog.id}`}>
        <BlogItem blog={blog} />
      </Link>
    ))}
  </div>
);

export default BlogList;
