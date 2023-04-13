import { useState } from 'react';

function CustomInput({ addNewInput }) {
    const [currentBlog, setCurrentBlog] = useState('');
    const [blogs, setBlogs] = useState([]);

    const handleChange = (event) => {
        setCurrentBlog(event.target.value);
    }
    const handleSubmit = (event) => {
        setBlogs([...blogs, currentBlog]);
        setCurrentBlog('');
        event.preventDefault();
        addNewInput();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className='title' placeholder='Title' onChange={handleChange} value={currentBlog} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CustomInput;