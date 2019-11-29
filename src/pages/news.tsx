import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { connect } from 'react-redux'
import { RootState } from '../store/reducers'
import { bindActionCreators } from 'redux'
import * as newsActions from '../store/actions/news/news'
import { NewsState } from '../store/types/news'
import styled from 'styled-components'
import { NewsList } from '../components/news/NewsList'

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
	clearNews: typeof newsActions.clearNews
}

type Props = RouteComponentProps & StateProps & DispatchProps

const NewsPage: React.SFC<Props> = (props): JSX.Element => {
	const { getNews, clearNews, total, ids, articles, loading } = props

	const didMount = React.useRef(false)
	const [page, setPage] = React.useState(1)
	const [hasNextPage, setHasNextPage] = React.useState(true)

	React.useEffect(() => {
		if (didMount.current) {
			setHasNextPage(ids.length < total)
		} else {
			didMount.current = true
		}
		getNews({ page: Number(page) })
	}, [page])

	React.useEffect(() => {
		return () => {
			clearNews()
		}
	}, [])

	const loadMore = async (
		startIndex: number,
		stopIndex: number
	): Promise<void> => {
		setPage(page + 1)
	}

	return (
		<NewsContainer>
			{!didMount ? (
				<div>Loading...</div>
			) : (
				<NewsList
					articles={articles}
					loadMore={loadMore}
					loading={loading}
					ids={ids}
					hasNextPage={hasNextPage}
				/>
			)}
		</NewsContainer>
	)
}

export default connect(
	(store: RootState) => store.news,
	dispatch =>
		bindActionCreators(
			{ getNews: newsActions.getNews, clearNews: newsActions.clearNews },
			dispatch
		)
)(NewsPage)
