import Card from '../card/Card';
import Info from '../info/Info';
// import Search from '../search/Search';
// import { useState } from 'react';
import './main.css'
import React, { useState, useEffect } from 'react'

export default function Main() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
}, []);
    async function fetchData () {
        const url = 'https://restcountries.com/v2/all';
        try {
            const response = await fetch(url);
            const Data = await response.json();
            setData(Data);
            console.log(Data);
        } catch (err) {
            console.log(err)
        }
    }


    const [input, setInput] = useState('');
    function inputChange(e) {
        const value = e.target.value;
        setInput(value);
    }
    let cData = data;

    if (input.length > 0) {
        cData = data.filter((el) => {
            let name = el.name.toUpperCase();
            let lang = el.languages.map((e) => e.name).join('').toUpperCase();
            let cap = el.capital;
            if (cap) {
                cap = cap.toUpperCase();
            } else {
                cap = '';
            }
            if (check(name) || check(lang) || check(cap)) return true;
            return false;
        });
        function check (name) {
            let val = input.toUpperCase();
            return name.includes(val)
        }
    }
    
    return (
        <main>
            <Info data={data} />
            <section className='search'>
                <input onChange={inputChange} value={input} className='search__input' placeholder='Search countries by name, city and language'/>
            </section>
            <a href='#stats' className='stats__a'>Stats</a>
            <Card data={cData} />
        </main>
    );
}