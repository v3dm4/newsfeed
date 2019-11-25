import React, { ImgHTMLAttributes, HTMLAttributes } from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`

export const Img: React.FC<ImgHTMLAttributes<HTMLImageElement>> = (
	props
): JSX.Element => {
	return <StyledImg {...props} />
}
