import React from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom';

function Signin(props) {
    return (
        <div className='sign'>
            <div className='content'>
                <h1>IT Professionals Work</h1>
                <hr/>
                <h2>Вход</h2>
                <form className='signform'>
                    <label className='block'>
                        <input type='email' placeholder="Email"></input>
                    </label>
                    <label className='block'>
                        <input type='text' placeholder="Пароль"></input>
                    </label>
                </form>
                <Link className='authlink' to='auth'>Войти</Link>
                <Link className='signlink' to='/sign-up'>Регистрация</Link>
            </div>
        </div>
    );
}

export default Signin;
