import * as React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	height: 50px;
	padding: 0 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const NavBar: React.FC = () => {
	return (
		<Nav>
			<Link to='/'>На главную</Link>
			<Link to='/news/1'>Новости</Link>
			<Link to='/login'>Логин</Link>
			<Link to='/profile'>Профиль</Link>
		</Nav>
	)
}
