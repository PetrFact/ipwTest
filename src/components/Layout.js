import React, { useState } from 'react'
import { MdOutlineCancelPresentation, MdOutlineMenu } from 'react-icons/md'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/styles.css'

export default function Layout() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div className='layout'>
            <div className='navbar'>
                <NavLink className='logo' to='/' onClick={click}>IPW</NavLink>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <NavLink className='nav-item' to='vacancies' onClick={handleClick}>Вакансии</NavLink>
                    <NavLink className='nav-item' to='resume' onClick={handleClick}>Резюме</NavLink>
                    <NavLink className='nav-item' to='about' onClick={handleClick}>О нас</NavLink>
                </ul>
                <div className='menu' onClick={handleClick}>
                    {click ? (<MdOutlineCancelPresentation size={32} style={{ color: '#f8f8f8' }} />) : (<MdOutlineMenu size={32} style={{ color: '#f8f8f8' }} />)}

                </div>
            </div>
            <Outlet/>
        </div>
    )
}