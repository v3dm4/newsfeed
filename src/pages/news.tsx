import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { connect } from 'react-redux'
import { RootState } from '../store/reducers'
import { bindActionCreators } from 'redux'
import * as newsActions from '../store/actions/news/news'
import { NewsState } from '../store/types/news'
import { NewsCard } from '../components/news/NewsCard'
import styled from 'styled-components'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List } from 'react-window'

const NewsContainer = styled.div`
	width: 100%;
	max-width: 760px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 50px);
`

type StateProps = NewsState

type DispatchProps = {
	getNews: typeof newsActions.getNews
}

type Props = RouteComponentProps<{ page: string }> & StateProps & DispatchProps

const NewsPage: React.SFC<Props> = (props): JSX.Element => {
	const { getNews, page, total, loading, ids, articles, navigate } = props

	React.useEffect(() => {
		getNews({ page: Number(page) })
	}, [page])

	const changePage = React.useCallback(
		async (amount: number) => {
			if (props.page && navigate) {
				navigate(`/news/${Number(props.page) + amount}`)
			}
		},
		[page, total]
	)

	const RowElement = ({ index, style }: { index: number; style: object }) => {
		const id = ids[index]
		const article = articles[id]
		return <NewsCard article={article} style={style} />
	}

	return (
		<NewsContainer>
			{loading ? (
				<div>Loading...</div>
			) : (
				<AutoSizer style={{ height: '100%', width: '100%' }}>
					{({ height, width }) => (
						<List
							itemKey={(index: number) => {
								return ids[index]
							}}
							height={height}
							width={width}
							itemCount={ids.length}
							itemSize={600}
						>
							{RowElement}
						</List>
					)}
				</AutoSizer>
			)}
		</NewsContainer>
	)
}

export default connect(
	(store: RootState) => store.news,
	dispatch => bindActionCreators({ getNews: newsActions.getNews }, dispatch)
)(NewsPage)
