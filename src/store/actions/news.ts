import { getNews as getNewsRequest } from './../../api/index'
import { NewsParams, API } from '../../api'
import { Dispatch } from 'react'
import { NewsAction, NewsState } from '../types/news'
import { RootState } from '../reducers'
import { NewsElement } from '../types/news'

export const getNews = (params: NewsParams) => async (
  dispatch: Dispatch<NewsAction>,
  getState: () => RootState,
  api: API
) => {
  dispatch({ type: 'news/get/request' })
  try {
    const { articles, totalResults } = await api.getNews(params)
    const initialModel: {
      articles: {
        [key: string]: NewsElement
      }
      page: number
    } = {
      articles: {},
      page: 1
    }
    const payload = {
      page: Math.floor(totalResults / 10) + 1,
      ...articles.reduce((result: any, currVal) => {
        const { source, publishedAt } = currVal as any
        const id = `${source.name}|||${publishedAt}`
        result.articles[id] = { id, ...currVal }
        return result
      }, initialModel)
    }
    dispatch({ type: 'news/get/resolve', payload })
  } catch (err) {
    dispatch({ type: 'news/get/reject', payload: err })
  }
}
