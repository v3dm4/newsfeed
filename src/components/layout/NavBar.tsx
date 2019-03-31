import * as React from 'react'

import { Link } from '@reach/router'

export const NavBar: React.FC  = () => {
    return (
        <nav>
            <Link to="/">На главную</Link>
            <Link to='/news'>Новости</Link>
        </nav>
    )
}