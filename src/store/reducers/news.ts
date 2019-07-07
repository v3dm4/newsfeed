import { NewsState, NewsAction } from '../types/news'

export const initialState: NewsState = {
    loading: false,
    ids: [],
    articles: [],
    totalResults: 0
}

const news = (state = initialState, action: NewsAction): NewsState => {
    switch (action.type) {
        case 'news/get/request':
            return {
                ...state,
                loading: true
            }
        case 'news/get/resolve':
            return {
                ...state,
                loading: false,
                ...action.payload
            }    
        case 'news/get/reject':
            return {
                ...state,
                loading: false,
                ...action.payload
            }    
        default:
            return state    
    }
}

export default news