import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { NewsState } from '../store/types/news';
import { useSelector, useDispatch } from 'react-redux'

const NewsPage: React.FC<RouteComponentProps> = (): JSX.Element => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        debugger
        dispatch({ type: 'news/get/request' })
    }, [])

    return (
        <div>
            НОВОСТИ
        </div>
    )
}

export default NewsPage