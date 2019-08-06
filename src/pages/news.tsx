import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { connect } from 'react-redux'
import { RootState } from '../store/reducers'
import { bindActionCreators } from 'redux'
import * as NewsActions from '../store/actions/news'

const NewsPage: React.FC<RouteComponentProps> = (props: any): JSX.Element => {
    const { getNews } = props
    React.useEffect(() => {
        getNews()
    }, [])

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