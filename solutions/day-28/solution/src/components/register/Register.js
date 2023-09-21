import './register.css'

export default function Register() {
    return(
        <section className='register'>
            <h1 className='login__h1'>REGISTER</h1>
            <input className='login__input' placeholder='First name' name='firstName'></input>
            <input className='login__input' placeholder='Last name' name='lastName'></input>
            <input className='login__input' placeholder='Email' name='email'></input>
            <input className='login__input' placeholder='Password' name='password'></input>
            <button className='login__btn'>Sign Up</button>
        </section>
    );
}