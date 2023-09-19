import './header.css'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <div className='nav__container'>
                    <div className='logo'>
                        <Link to="/" className='logo__a'>Countries</Link>
                        
                    </div>
                    <ul className='nav__ul'>
                        <li className='nav__item'>
                            <Link className='nav__item__a' to="/about">About</Link>
                        </li>
                        <li className='nav__item'>
                            <Link className='nav__item__a' to="/login">Login</Link>
                        </li>
                        <li className='nav__item'>
                            <Link className='nav__item__a' to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}