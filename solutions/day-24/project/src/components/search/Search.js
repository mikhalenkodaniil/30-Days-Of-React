import { useState } from 'react';
import './search.css'
export default function Search () {
    const [input, setInput] = useState('');
    function inputChange(e) {
        const value = e.target.value;
        setInput(value);
    }
    return (
        <section className='search'>
            <input onChange={inputChange} value={input} className='search__input' placeholder='Search countries by name, city and language'/>
        </section>
    );
}