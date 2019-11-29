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
}

type Props = RouteComponentProps & StateProps & DispatchProps

const NewsPage: React.SFC<Props> = (props): JSX.Element => {
	const { getNews, total, ids, articles, loading } = props

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

	const loadMore = async (
		startIndex: number,
		stopIndex: number
	): Promise<void> => {
		setPage(page + 1)
	}

	return (
		<NewsContainer>
			<NewsList
				articles={articles}
				loadMore={loadMore}
				loading={loading}
				ids={ids}
				hasNextPage={hasNextPage}
			/>
		</NewsContainer>
	)
}

export default connect(
	(store: RootState) => store.news,
	dispatch => bindActionCreators({ getNews: newsActions.getNews }, dispatch)
)(NewsPage)
