import React from 'react'
import { Nav } from './NavBar'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { ThemeSwitcher } from '../../common/ThemeSwitcher'

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
		color: ${props => props.theme.accent};
	}
`

export const TopNavBar: React.FC = (): JSX.Element => {
	return (
		<TopNav>
			<TextLink to='/'>На главную</TextLink>
			<TextLink to='/news'>Новости</TextLink>
			<TextLink to='/login'>Логин</TextLink>
			<ThemeSwitcher />
		</TopNav>
	)
}
