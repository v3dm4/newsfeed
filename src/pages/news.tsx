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
import InfiniteLoader from 'react-window-infinite-loader'

const NewsContainer = styled.div`
	width: 100%;
	display: flex;
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
	const { getNews, total, loading, ids, articles } = props

	const [page, setPage] = React.useState(1)

	React.useEffect(() => {
		getNews({ page: Number(page) })
	}, [page])

	// const changePage = React.useCallback(
	// 	async (amount: number) => {
	// 		if (props.page && navigate) {
	// 			navigate(`/news/${Number(props.page) + amount}`)
	// 		}
	// 	},
	// 	[page, total]
	// )

	const loadFunc = async (
		startIndex: number,
		stopIndex: number
	): Promise<void> => {
		debugger
		setPage(page + 1)
	}

	const RowElement = ({ index, style }: { index: number; style: object }) => {
		const id = ids[index]
		const article = articles[id]
		return (
			<NewsCard
				article={article}
				style={{ ...style, left: '50%', transform: 'translateX(-50%)' }}
			/>
		)
	}

	return (
		<NewsContainer>
			{loading ? (
				<div>Loading...</div>
			) : (
				<InfiniteLoader
					isItemLoaded={index => index < ids.length}
					loadMoreItems={loadFunc}
					itemCount={ids.length < total ? ids.length + 10 : ids.length}
				>
					{({ onItemsRendered, ref }) => (
						<List
							itemKey={(index: number) => {
								return ids[index]
							}}
							onItemsRendered={onItemsRendered}
							ref={ref}
							overscanCount={1}
							height={720}
							width={1920}
							itemCount={ids.length}
							itemSize={600}
						>
							{RowElement}
						</List>
					)}
				</InfiniteLoader>
			)}
		</NewsContainer>
	)
}

export default connect(
	(store: RootState) => store.news,
	dispatch => bindActionCreators({ getNews: newsActions.getNews }, dispatch)
)(NewsPage)
