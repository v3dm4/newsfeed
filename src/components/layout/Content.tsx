import styled from 'styled-components'

export const Content = styled.main`
	height: calc(100vh - 50px);

	@media screen and (max-width: 768px) {
		margin-bottom: 50px;
	}

	@media screen and (min-width: 769px) {
		margin-top: 50px;
	}
`
