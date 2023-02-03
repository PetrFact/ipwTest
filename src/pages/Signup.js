import React from 'react';
import {Link} from 'react-router-dom';

function Signup(props) {
    return (
        <div className='sign'>
            <div className='content'>
                <h2>IT Professionals Work</h2>
                <h2>Регистрация</h2>
                <form className='signform'>
                    <label className='block'>
                        <input type='email' placeholder="Email"></input>
                    </label>
                    <label className='block'>
                        <input type='text' placeholder="Пароль"></input>
                    </label>
                    
                </form>

                <Link className='authlink' to=''>Зарегистрироваться</Link>
                <Link className='signlink' to='/sign-in'>Войти</Link>
            </div>
        </div>
    );
}

export default Signup;