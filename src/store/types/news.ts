export interface NewsElement {
  id: string
  source: {
      id: null
      name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface NewsState {
  loading: boolean
  ids: string[]
  articles: NewsElement[]
  totalResults: number
}

export type NewsAction = 
  | { type: 'news/get/request' }
  | { type: 'news/get/resolve', payload: Partial<NewsState> }
  | { type: 'news/get/reject', payload: Error }