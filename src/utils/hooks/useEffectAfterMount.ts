import { useEffect, useRef } from 'react'

export const useEffectAfterMount = (callback: Function, deps: any[]) => {
	const mounted = useRef(false)
	useEffect(() => {
		if (mounted.current) {
			return callback()
		}
		mounted.current = true
	}, deps)
}
