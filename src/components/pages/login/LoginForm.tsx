import React from 'react'
import { Panel } from '../../ui/Panel/Panel'
import Input from '../../ui/Input'
import { Button } from '../../ui/Button'
import { FormElement } from '../../ui/Form/FormElement'
import { Tabs } from '../../ui/Tabs'
import { availableTabs } from './const'
import { LoginParams } from '../../../api/auth'
import { Redirect } from '@reach/router'
import { useAuthProvider } from '../../../utils/hooks/useAuth'
import { Form, Field } from 'react-final-form'

const validationSchema = {
	required: (value: string) => (value ? undefined : 'Required'),
	username: (value: string) => {
		return !value
			? 'Required'
			: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
			? null
			: 'Invalid email'
	},
}

export const LoginForm: React.FC = (): JSX.Element => {
	const [activeTab, setActiveTab] = React.useState('signIn')
	const { uid, login, signUp } = useAuthProvider()

	const initialValues: LoginParams = {
		email: '',
		password: '',
	}

	const onSubmit = (values: LoginParams) => {
		activeTab === 'signIn' ? login(values) : signUp(values)
	}

	return uid ? (
		<Redirect to='/news' noThrow />
	) : (
		<Panel minWidth={360}>
			<Panel.Header>
				<Tabs
					tabs={availableTabs}
					activeTab={activeTab}
					onChange={value => setActiveTab(value)}
				/>
				<Form
					onSubmit={onSubmit}
					subscription={{ pristine: true }}
					initialValues={initialValues}
				>
					{({ handleSubmit }) => (
						<form onSubmit={handleSubmit}>
							<Panel.Content>
								<Field<string>
									id='email'
									component={Input}
									name='email'
									type='email'
									label='Email'
									validate={validationSchema.required}
								/>
								<Field<string>
									id='password'
									name='password'
									type='password'
									label='Пароль'
									component={Input}
									validate={validationSchema.required}
								/>
								<FormElement margin='l'>
									<Button type='submit'>
										{activeTab === 'signIn' ? 'Войти' : 'Подтвердить'}
									</Button>
								</FormElement>
							</Panel.Content>
						</form>
					)}
				</Form>
			</Panel.Header>
		</Panel>
	)
}
