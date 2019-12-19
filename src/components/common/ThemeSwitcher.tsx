import React from 'react'
import { SwitchWithLabel } from '../ui/Switch/SwitchWithLabel'
import { useTheme } from '../../utils/hooks/useTheme'

export const ThemeSwitcher: React.FC = (): JSX.Element => {
	const [name, changeTheme] = useTheme()

	return (
		<SwitchWithLabel
			label='Тема'
			value={name === 'light'}
			onChange={changeTheme}
		>
			<SwitchWithLabel.On>🌙</SwitchWithLabel.On>
			<SwitchWithLabel.Off>☀️</SwitchWithLabel.Off>
		</SwitchWithLabel>
	)
}
