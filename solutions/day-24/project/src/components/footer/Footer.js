import './footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <p className='copyright'>Copyright ©2020 30 Days Of React</p>
            <p className='footer__join'>Join <a href='https://github.com/Asabeneh/30-Days-Of-React' className='footer__a'>30 Days of React challenge</a></p>
            <p className='footer_dev'>Designed <a href='https://www.linkedin.com/in/asabeneh/' className='footer__a'>Asabeneh Yetayeh</a></p>
            <p className='footer_dev'>Built <a href='#s' className='footer__a'>Mikhalenka Daniil</a></p>
            <a href='#top' className='top__a'>Go top</a>
        </footer>
    );
}