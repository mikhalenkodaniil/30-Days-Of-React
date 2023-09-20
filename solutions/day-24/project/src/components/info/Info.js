import './info.css'

export default function Info ({ data, length }) {
    let out;
    if (length < data) {
        out = (<p className='info__length'>{length} satisfied the search criteria</p>);
    }
    return (
        <section className='info'>
            <h1 className='info__h1'>World Countries Data</h1>
            <p className='info__p'>Currently, we have {data} countries</p>
            {out}
        </section>
    );
}