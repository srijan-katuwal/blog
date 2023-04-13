import './blog.css';
import { useState } from 'react';

import CustomInput from './CustomInput/CustomInput';

function Blog() {
    const [currentCount, setCurrentCount] = useState(0);
    const [lines, setLines] = useState({ 0: '' });
    const lineInputs = () => {
        const inputs = [];
        for (let i in lines) {
            inputs.push(
                <CustomInput addNewInput={addNewInput} line={lines[i]} key={i} />
            )
        }
        return inputs;
    }
    const addNewInput = () => {
        setCurrentCount(currentCount + 1);
        setLines({ ...lines, [currentCount]: '' });
        console.log(lines)
    }
    return (
        <div className='blog'>
            {
                lineInputs()
            }
        </div>
    )
}

export default Blog;