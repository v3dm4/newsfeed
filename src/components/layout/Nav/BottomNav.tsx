import React from 'react'
import { Nav } from './NavBar'
import styled from 'styled-components'
import { Link } from '@reach/router'

const BottomNav = styled(props => <Nav {...props} />)`
	bottom: 0;
`

const IconLink = styled(Link)`
	font-size: 15px;
	font-weight: 300;
	text-decoration: none;
	color: rgba(0, 0, 0, 0.54);
	cursor: pointer;
	padding: 15px;
	text-transform: uppercase;
	transition: color 200ms ease;
`

export const BottomNavBar: React.FC = (): JSX.Element => {
	return (
		<BottomNav>
			<IconLink to='/'>На главную</IconLink>
			<IconLink to='/news'>Новости</IconLink>
			<IconLink to='/login'>Логин</IconLink>
			<IconLink to='/profile'>Профиль</IconLink>
		</BottomNav>
	)
}
