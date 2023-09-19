import Info from '../info/Info';
import Search from '../search/Search';
import './main.css'
import React, { useState, useEffect } from 'react'

export default function Main() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetchData();
}, []);
    async function fetchData () {
        const url = 'https://restcountries.com/v2/all';
        try {
            const response = await fetch(url);
            const Data = await response.json();
            setData(Data);
        } catch (err) {
            console.log(err)
        }
    }
    console.log(data);
    if (data) return (
        <main>
            <Info data={data} />
            <Search data={data} />
        </main>
    );
}