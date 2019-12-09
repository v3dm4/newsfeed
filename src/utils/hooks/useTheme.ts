import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { AppContext } from '../../App'

type IUseThemeReturnValue = [string, (value: boolean) => void]

export const useTheme = (): IUseThemeReturnValue => {
	const { name } = useContext(ThemeContext)

	const { changeTheme } = useContext(AppContext)

	return [name, changeTheme]
}
