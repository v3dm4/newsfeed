import React from 'react'
import { Nav } from './NavBar'
import styled from 'styled-components'
import { Link } from '../../ui/Link'
import { IoMdContact, IoMdBook } from 'react-icons/io'
import { useAuth } from '../../../utils/hooks/useAuth'

const BottomNav = styled(props => <Nav {...props} />)`
	&&& {
		justify-content: space-around;
		bottom: 0;
	}
`

const IconLink = styled(Link)`
	font-size: 25px;
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

export const BottomNavBar: React.FC = (): JSX.Element => {
	const { uid } = useAuth()
	return (
		<BottomNav>
			<IconLink to='/news'>
				<IoMdBook />
			</IconLink>
			<IconLink to={uid ? '/profile' : '/login'}>
				<IoMdContact />
			</IconLink>
		</BottomNav>
	)
}
