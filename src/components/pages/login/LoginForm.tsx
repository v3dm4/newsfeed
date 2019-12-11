import React from 'react'
import { Panel } from '../../ui/Panel/Panel'
import { Formik, Form } from 'formik'
import Input from '../../ui/Input'
import { Button } from '../../ui/Button'
import { FormElement } from '../../ui/Form/FormElement'
import { Tabs } from '../../ui/Tabs'
import { availableTabs } from './const'
import { LoginParams } from '../../../api/auth'
import { Redirect } from '@reach/router'
import { useAuthProvider } from '../../../utils/hooks/useAuth'

export const LoginForm: React.FC = (): JSX.Element => {
	const [activeTab, setActiveTab] = React.useState('signIn')
	const { uid, login, signUp } = useAuthProvider()

	const initialValues: LoginParams = {
		email: '',
		password: '',
	}
	return uid ? (
		<Redirect to='/news' noThrow />
	) : (
		<Formik
			initialValues={initialValues}
			onSubmit={async values => {
				activeTab === 'signIn' ? login(values) : signUp(values)
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
						<Input id='email' name='email' type='email' label='Email' />
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
