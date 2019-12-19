import React from 'react'
import { Panel } from '../../ui/Panel/Panel'
import { ThemeSwitcher } from '../../common/ThemeSwitcher'
import { AppContext } from '../../../App'
import { Button } from '../../ui/Button'
import { useAuthProvider } from '../../../utils/hooks/useAuth'
import { Header } from '../../ui/Header'
import { FormElement } from '../../ui/Form/FormElement'

export const SettingsPanel: React.FC = (): JSX.Element => {
	const { size } = React.useContext(AppContext)
	const { logout } = useAuthProvider()
	return (
		<Panel minWidth={size === 's' ? 320 : '80%'}>
			<Panel.Header style={{ padding: '0 20px' }}>
				<Header height={30}>Настройки</Header>
			</Panel.Header>
			<Panel.Content>
				{size === 's' && (
					<FormElement mt='none' mb='l'>
						<ThemeSwitcher />
					</FormElement>
				)}
				<Button onClick={logout}>Выйти из аккаунта</Button>
			</Panel.Content>
		</Panel>
	)
}
