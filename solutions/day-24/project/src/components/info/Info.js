import './info.css'

export default function Info ({ data }) {
    return (
        <section className='info'>
            <h1 className='info__h1'>World Countries Data</h1>
            <p className='info__p'>Currently, we have {data.length} countries</p>
        </section>
    );
}