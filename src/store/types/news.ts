import { NewsParams } from '../../api'

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
	articles: {
		[key: string]: NewsElement
	}
	total: number
}
