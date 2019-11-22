import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { connect } from 'react-redux'
import { RootState } from '../store/reducers'
import { bindActionCreators } from 'redux'
import * as NewsActions from '../store/actions/news'
import { NewsState } from '../store/types/news'

type StateProps = NewsState

type DispatchProps = {
	getNews: typeof NewsActions.getNews
}

type Props = RouteComponentProps<{ page: string }> & StateProps & DispatchProps

const changePage = (
	currentPage: number | string | undefined,
	offset: number,
	total: number
) => {}

const NewsPage: React.SFC<Props> = (props): JSX.Element => {
	const { getNews, page, total, loading, ids, articles } = props

	React.useEffect(() => {
		getNews({ page: Number(page) })
	}, [page])

	const nextPage = React.useCallback(() => changePage(page, 1, total), [
		page,
		total,
	])

	const prevPage = React.useCallback(() => changePage(page, -1, total), [
		page,
		total,
	])

	if (loading) return <div>Loading...</div>

	return (
		<div>
			{ids.map(id => {
				const { title, description, publishedAt, source, url } = articles[id]
				return (
					<div key={id}>
						<span>{publishedAt}</span>
						<span>{source.name}</span>
						<span>{title}</span>
						<span>{description}</span>
					</div>
				)
			})}
			<ul>
				<li>
					<button type='button'>←</button>
				</li>
				<li>{page}</li>
				<li>
					<button
						type='button'
						onClick={nextPage}
						disabled={Number(page) >= total}
					>
						→
					</button>
				</li>
			</ul>
		</div>
	)
}

export default connect(
	(store: RootState) => store.news,
	dispatch => bindActionCreators({ getNews: NewsActions.getNews }, dispatch)
)(NewsPage)
