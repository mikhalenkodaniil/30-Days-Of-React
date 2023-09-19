import './card.css'

export default function Card ({ data }) {
    if(data[0]) {
        const card = data.map((el, id)=> {
            let language = el.languages.map((e) => e.name).join(', ');
            let population = el.population.toString().split('').map((e,i,a) => {
                if ((a.length - i - 1) % 3 === 0 && i !== (a.length - 1)) {
                    return `${e},`;
                } else {
                    return `${e}`;
                }
            }).join('');
        return (
            <div className='card' key={`card ${id}`}>
                <img className='card__img' width='240px' height='144px' src={el.flag} alt='flag'></img>
                <h1 className='card__name'>{el.name.toUpperCase()}</h1>
                <div className='card__info'>
                    <p><b>Capital:</b> {el.capital}</p>
                    <p><b>Languages:</b> {language}</p>
                    <p><b>Population:</b> {population}</p>
                </div>
            </div>)
        });
        return (
            <section className='cards'>
                {card}
            </section>
        );
    }
}