import { useContext } from 'react'
import { AppContext } from '../../App'
import { ThemeContext } from 'styled-components'

type IUseThemeReturnValue = [string, (value: boolean) => void]

export const useTheme = (): IUseThemeReturnValue => {
	const { changeTheme } = useContext(AppContext)
	const { name } = useContext(ThemeContext)

	return [name, changeTheme]
}
