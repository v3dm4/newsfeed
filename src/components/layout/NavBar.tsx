import * as React from 'react'

import { Link } from '@reach/router'

const NavBar: React.FC  = () => {
    return (
        <nav>
            <Link to="/">На главную</Link>
            <Link to='/news'>Новости</Link>
        </nav>
    )
}

export default NavBar