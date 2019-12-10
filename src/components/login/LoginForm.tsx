import React from 'react'
import { Panel } from '../ui/Panel/Panel'
import { Formik, Form } from 'formik'
import Input from '../ui/Input'
import { Button } from '../ui/Button'
import { FormElement } from '../ui/Form/FormElement'
import { Tabs } from '../ui/Tabs'
import { availableTabs } from './const'
import { LoginParams } from '../../api'
import { Redirect } from '@reach/router'
import { useAuthProvider } from '../../utils/hooks/useAuth'

export const LoginForm: React.FC = (props): JSX.Element => {
	const [activeTab, setActiveTab] = React.useState('signIn')
	const { username, login } = useAuthProvider()

	const initialValues: LoginParams = {
		username: '',
		password: '',
	}
	return username ? (
		<Redirect to='/news' noThrow />
	) : (
		<Formik
			initialValues={initialValues}
			onSubmit={async values => {
				await login(values)
			}}
		>
			<Form {...({} as any)}>
				<Panel minWidth={360}>
					<Panel.Header>
						<Tabs
							tabs={availableTabs}
							activeTab={activeTab}
							onChange={value => setActiveTab(value)}
						/>
					</Panel.Header>
					<Panel.Content>
						<Input id='username' name='username' type='email' label='Email' />
						<Input
							id='password'
							name='password'
							type='password'
							label='Пароль'
						/>
						<FormElement margin='l'>
							<Button type='submit'>
								{activeTab === 'signIn' ? 'Войти' : 'Подтвердить'}
							</Button>
						</FormElement>
					</Panel.Content>
				</Panel>
			</Form>
		</Formik>
	)
}
