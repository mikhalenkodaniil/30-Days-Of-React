import './login.css'

export default function Login() {
    return (
        <section className='login'>
            <h1 className='login__h1'>LOG IN</h1>
            <input className='login__input' placeholder='Email' name='email' type='text'></input>
            <input className='login__input' placeholder='Password' name="password"></input>
            <button className='login__btn'>Login</button>
        </section>
    );
}