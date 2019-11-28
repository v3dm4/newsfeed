import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { connect } from 'react-redux'
import { RootState } from '../store/reducers'
import { bindActionCreators } from 'redux'
import * as newsActions from '../store/actions/news/news'
import { NewsState } from '../store/types/news'
import { NewsCard } from '../components/news/NewsCard'
import styled from 'styled-components'
import {
	AutoSizer,
	List,
	InfiniteLoader,
	Index,
	IndexRange,
} from 'react-virtualized'
import 'react-virtualized/styles.css'

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

type Props = RouteComponentProps & StateProps & DispatchProps

const NewsPage: React.SFC<Props> = (props): JSX.Element => {
	const { getNews, total, ids, articles } = props

	const [page, setPage] = React.useState(1)
	const listRef = React.useRef()

	React.useEffect(() => {
		getNews({ page: Number(page) })
	}, [page])

	const loadMoreHandler = async (params: IndexRange): Promise<void> => {
		setPage(page + 1)
	}

	const rowCount = ids.length < total ? ids.length + 1 : ids.length

	const isRowLoaded = ({ index }: Index): boolean =>
		!(ids.length < total) || index < ids.length

	const rowRenderer = ({
		index,
		style,
		key,
	}: {
		index: number
		style: object
		key: string
	}) => {
		if (!isRowLoaded({ index })) {
			return (
				<div
					style={{
						...style,
						left: '50%',
						transform: 'translateX(-50%)',
						width: '100px',
						height: '400px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					key={key}
				>
					Loading...
				</div>
			)
		}

		const id = ids[index]
		const article = articles[id]

		return (
			<NewsCard
				article={article}
				key={key}
				style={{ ...style, left: '50%', transform: 'translateX(-50%)' }}
			/>
		)
	}

	return (
		<NewsContainer>
			<AutoSizer style={{ width: '100%', height: '100%' }}>
				{({ height, width }) => (
					<InfiniteLoader
						isRowLoaded={isRowLoaded}
						loadMoreRows={loadMoreHandler}
						rowCount={5000}
						threshold={4}
					>
						{({ onRowsRendered, registerChild }) => (
							<List
								{...ids}
								overscanRowCount={7}
								onRowsRendered={onRowsRendered}
								ref={registerChild}
								height={height}
								width={width}
								rowCount={rowCount}
								rowHeight={400}
								rowRenderer={rowRenderer}
							></List>
						)}
					</InfiniteLoader>
				)}
			</AutoSizer>
		</NewsContainer>
	)
}

export default connect(
	(store: RootState) => store.news,
	dispatch => bindActionCreators({ getNews: newsActions.getNews }, dispatch)
)(NewsPage)
