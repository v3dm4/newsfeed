import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { connect } from 'react-redux'
import { RootState } from '../store/reducers'
import { bindActionCreators } from 'redux'
import * as NewsActions from '../store/actions/news'
import { NewsState } from '../store/types/news';

type StateProps = NewsState

type DispatchProps = {
    getNews: typeof NewsActions.getNews
}

type Props = RouteComponentProps<{ pageId: string }> & StateProps & DispatchProps

const NewsPage: React.SFC<Props> = (props): JSX.Element => {
    const { getNews, page } = props

    React.useEffect(() => {
        getNews({ page: Number(page) })
    }, [page])

    return (
        <div>
            НОВОСТИ
        </div>
    )
}

export default connect(
    (store: RootState) => store.news,
    dispatch => bindActionCreators({ getNews: NewsActions.getNews }, dispatch)
)(NewsPage)