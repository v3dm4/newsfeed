import React from 'react'

interface IWindowDimensions {
	width: number
	height: number
}

const getWindowDimensions = (): IWindowDimensions => {
	const { innerWidth: width, innerHeight: height } = window as Window
	return { width, height }
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
