import React from 'react'
import { Nav } from './NavBar'
import styled, { ThemeContext } from 'styled-components'
import { Link } from '@reach/router'
import { Switch } from '../../ui/Switch'
import { AppContext } from '../../../App'

const TopNav = styled(props => <Nav {...props} />)`
	top: 0;
`

const TextLink = styled(Link)`
	font-size: 15px;
	font-weight: 500;
	text-decoration: none;
	color: ${props => props.theme.navText};
	cursor: pointer;
	padding: 15px;
	text-transform: uppercase;
	transition: color 200ms ease;

	:hover {
		color: ${props => props.theme.navTextHover};
	}
`

export const TopNavBar: React.FC = (): JSX.Element => {
	const { changeTheme } = React.useContext(AppContext)
	const { name } = React.useContext(ThemeContext)

	return (
		<TopNav>
			<TextLink to='/'>На главную</TextLink>
			<TextLink to='/news'>Новости</TextLink>
			<TextLink to='/login'>Логин</TextLink>
			<TextLink to='/profile'>Профиль</TextLink>
			<Switch value={name === 'light'} onChange={changeTheme} />
		</TopNav>
	)
}
