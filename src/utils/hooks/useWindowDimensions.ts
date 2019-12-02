import React from 'react'

export type IWindowSize = 's' | 'm' | 'l' | 'xl'

interface IWindowDimensions {
	width: number
	height: number
	size: IWindowSize
}

const getWindowDimensions = (): IWindowDimensions => {
	const { innerWidth: width, innerHeight: height } = window as Window
	let size: IWindowSize
	switch (true) {
		case width <= 768:
			size = 's'
			break
		case width > 768 && width <= 991:
			size = 'm'
			break
		case width > 991 && width <= 1199:
			size = 'l'
			break
		case width > 1199:
			size = 'xl'
			break
		default:
			size = 'm'
	}
	return { size, width, height }
}

export const useWindowDimensions = (): IWindowDimensions => {
	const [windowDimensions, setWindowDimensions] = React.useState(
		getWindowDimensions()
	)

	React.useEffect(() => {
		const resizeHandler = () => {
			setWindowDimensions(getWindowDimensions())
		}
		window.addEventListener('resize', resizeHandler)
		return () => window.removeEventListener('resize', resizeHandler)
	}, [])

	return windowDimensions
}
