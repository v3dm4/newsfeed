import * as React from 'react'
import { Link } from '@reach/router'

const NavBar: React.FC = () => {
    return (
        <nav>
            <Link to="/">На главную</Link>
            <Link to='/news/1'>Новости</Link>
            <Link to='/login'>Логин</Link>
            <Link to='/profile'>Профиль</Link>
        </nav>
    )
}

export default NavBar