/// <reference types="react-scripts" />

import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		text: string
		navTextHover: string
		bsColor: string
		navText: string
		name: string
		bg: string
		bgLight: string
		nav: string
		accent: string
		error: string
		lightError: string
		success: string
	}
}
