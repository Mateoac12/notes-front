import React from 'react'

import './index.scss'
import logo from 'assets/img/logo.svg'

import { Link } from 'wouter'

const Header = () => {

    const handleLogout = () => {
        localStorage.removeItem('token')
    }
    return (
        <>
            <header className="header">

                <h1 className="header__title">Inicio</h1>

                <Link href="/">
                    <img
                        alt="logo de Notas"
                        className="header__logo"
                        src={logo}
                    />
                </Link>

                <article className="login">
                    {
                        localStorage.getItem('token')
                            ? <button onClick={handleLogout}>Cerrar sesion</button>
                            : <Link href="/login" className="login__button">Login</Link>
                    }

                </article>

            </header>
        </>
    )
}

export default Header