import React from 'react';
import './BlogItem.css';
import Chip from './Chip';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog: { id, description, title, createdAt, authorName, authorAvatar, category, cover } }) => (
  <div className='blogItem-wrap'>
    <img src={cover} alt="blog cover image" className='blogItem-cover' />
    <Chip label={category} />
    <h3>{title}</h3>
    <p className='blogItem-desc'>{description}</p>
    <footer>
      <div className="blogItem-author">
        <img src={authorAvatar} alt="avatar" />
        <div>
          <h6>{authorName}</h6>
          <p>{createdAt}</p>
        </div>
      </div>
      <Link className='blogItem-link' to={`/blog/${id}`}>
        <span role="img" aria-label="read-more">➝</span>
      </Link>
    </footer>
  </div>
);

export default BlogItem;
