import * as React from 'react'
import styled from 'styled-components'
import { TopNavBar } from './TopNav'
import { BottomNavBar } from './BottomNav'
import { AppContext } from '../../../App'

export const Nav = styled.nav`
	position: fixed;
	left: 0;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: ${props => props.theme.nav};
	box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
`
export const NavHOC: React.FC = (): JSX.Element => {
	const { size } = React.useContext(AppContext)

	return size === 's' ? <BottomNavBar /> : <TopNavBar />
}
