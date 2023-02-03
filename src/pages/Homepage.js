import React from 'react';
import '../styles/styles.css';
import {Link} from 'react-router-dom';


export default function Homepage() {
    return (
        <div className='home'>
            <h2 className='secondary'>Здесь вы сможете создать своё Резюме!</h2>
            <h1 className='headline'>IT Professionals Work</h1>
            <ul className='signlinks'>
                <Link className='signlink' to='sign-in'>Авторизация / Создать резюме</Link>
            </ul>
            
        </div>
    );
}