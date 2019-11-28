import React from 'react'
import { Nav } from './NavBar'
import styled from 'styled-components'
import { Link } from '@reach/router'

const TopNav = styled(props => <Nav {...props} />)`
	top: 0;
`

const TextLink = styled(Link)`
	font-size: 15px;
	font-weight: 300px;
	text-decoration: none;
	color: rgba(0, 0, 0, 0.54);
	cursor: pointer;
	padding: 15px;
	text-transform: uppercase;
	transition: color 200ms ease;

	:hover {
		color: #000;
	}
`

export const TopNavBar: React.FC = (): JSX.Element => {
	return (
		<TopNav>
			<TextLink to='/'>На главную</TextLink>
			<TextLink to='/news'>Новости</TextLink>
			<TextLink to='/login'>Логин</TextLink>
			<TextLink to='/profile'>Профиль</TextLink>
		</TopNav>
	)
}
