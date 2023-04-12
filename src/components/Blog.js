import './blog.css';
import { useState } from 'react';

function Blog() {
    const [currentBlog, setCurrentBlog] = useState('');
    const [blogs, setBlogs] = useState([]);

    const handleChange = (event) => {
        setCurrentBlog(event.target.value);
    }
    const handleSubmit = (event) => {
        setBlogs([...blogs, currentBlog]);
        setCurrentBlog('');
        event.preventDefault();
    }

    return (
        <div className='blog'>
            <form onSubmit={handleSubmit}>
                <input className='title' placeholder='Title' onChange={handleChange} value={currentBlog} />
                <button type='submit'>Submit</button>
            </form>
            <div>
                <h2>BLOG</h2>
                {blogs.length > 0 &&
                    <ul className='blog-list'>
                        {blogs.map((blog) => <li>{blog}</li>)}
                    </ul>
                }
            </div>
        </div>
    )
}

export default Blog;