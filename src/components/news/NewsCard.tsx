import React, { HTMLAttributes } from 'react'
import { NewsElement } from '../../store/types/news'
import styled from 'styled-components'
import { Img } from '../ui/Img'

const CardContainer = styled.div`
	width: 100%;
	max-width: 760px;
	height: 400px;
	overflow: hidden;
`

interface NewsCardProps {
	article: NewsElement
}

export const NewsCard: React.FC<NewsCardProps &
	HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
	const {
		article: { title, description, urlToImage, publishedAt },
	} = props
	return (
		<CardContainer style={props.style}>
			<div>{title}</div>
			<div>{description}</div>
			<Img src={urlToImage} alt='image' />
			<div>{publishedAt}</div>
		</CardContainer>
	)
}
