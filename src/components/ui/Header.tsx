import styled from 'styled-components'
import { HTMLAttributes } from 'react'

export const StyledHeader = styled.h2`
	font-weight: 500;
	font-size: 22px;
	margin: 10px 0;
`

const truncateText = (element: HTMLElement): void => {
	const wordArray = element.innerHTML.split('')
	while (element.scrollHeight > element.offsetHeight) {
		wordArray.pop()
		element.innerHTML = wordArray.join(' ') + '...'
	}
}

interface HeaderProps {
	truncate?: boolean
}

export const Header: React.FC<HTMLAttributes<HTMLHeadingElement> &
	HeaderProps> = (props): JSX.Element => {
	return <StyledHeader style={props.style}>{props.children}</StyledHeader>
}
