import styled from 'styled-components'

interface IPageContainerProps {
  direction?: 'column' | 'row'
}

export const PageContainer = styled.div<IPageContainerProps>`
	width: 100%;
	display: flex;
  flex-direction: ${props => props.direction && props.direction};
	justify-content: center;
	align-items: center;
	height: calc(100vh - 50px);
`

PageContainer.defaultProps = {
  direction: 'row'
}
