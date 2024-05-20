import React, { useState } from 'react';
import Title from '../Title/Title';
import './Blogs.css';
import SearchBar from './SearchBar';
import BlogList from './BlogList';
import { blogList } from './data';
import EmptyList from './EmptyList';
const Blogs = () => {
    const [blogs, setBlogs] = useState(blogList);
 const [searchKey, setSearchKey] = useState('');
// searcg submit
 const handleSearchSubmit=event=> {
event.preventDefault();
handleSearchResults()
 }
// search by category 
 const handleSearchResults=()=>{
const allBlogs = blogList;
const filteredBlogs = allBlogs.filter(blog=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
setBlogs(filteredBlogs);
 };
 const handleClearSearch=()=>{
setBlogs(blogList);
setSearchKey('');
 }
    return (
    <div className='blog-container'>
       <Title subTitle='Altaneofin' title='Blogs' />
       <p className="centered-text">Awesome place to make oneself productive through daily update</p>
    <SearchBar value={searchKey} 
    clearSearch={handleClearSearch}
    formSubmit={handleSearchSubmit} handleSearchKey={(e)=>setSearchKey(e.target.value)}/>
    {!blogs.length ? <EmptyList/>: <BlogList blogs={blogs}/>}
    </div>
  );
}

export default Blogs;
