import React from 'react'
import { Switch } from '../ui/Switch/Switch'
import { useTheme } from '../../utils/hooks/useTheme'

export const ThemeSwitcher = () => {
	const [name, changeTheme] = useTheme()

	return (
		<Switch value={name === 'light'} onChange={changeTheme}>
			<Switch.On>🌙</Switch.On>
			<Switch.Off>☀️</Switch.Off>
		</Switch>
	)
}
