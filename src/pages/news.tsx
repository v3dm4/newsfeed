import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { connect } from 'react-redux'
import { RootState } from '../store/reducers'
import { bindActionCreators } from 'redux'
import * as newsActions from '../store/actions/news/news'
import { NewsState } from '../store/types/news'

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
					<button
						type='button'
						onClick={() => changePage(-1)}
						disabled={Number(page) <= 1}
					>
						←
					</button>
				</li>
				<li>{page}</li>
				<li>
					<button
						type='button'
						onClick={() => changePage(1)}
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
	dispatch => bindActionCreators({ getNews: newsActions.getNews }, dispatch)
)(NewsPage)
