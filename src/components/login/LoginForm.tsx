import React from 'react'
import { Panel } from '../ui/Panel/Panel'
import { Formik, Form } from 'formik'
import Input from '../ui/Input'
import { Button } from '../ui/Button'
import { FormElement } from '../ui/Form/FormElement'
import { Tabs } from '../ui/Tabs'
import { availableTabs } from './const'
import { connect } from 'react-redux'
import * as loginActions from '../../store/actions/auth/login'
import { LoginParams } from '../../api'
import { navigate } from '@reach/router'
import { RootState } from '../../store/reducers'
import { AuthState } from '../../store/types/auth'

type DispatchProps = {
	login: typeof loginActions.login
}

type StateProps = AuthState

type Props = DispatchProps & StateProps

const LoginForm: React.FC<Props> = (props): JSX.Element => {
	const { login, username } = props
	const [activeTab, setActiveTab] = React.useState('signIn')

	React.useEffect(() => {
		if (username) {
			navigate('/news')
		}
	}, [username])

	const initialValues: LoginParams = {
		username: '',
		password: '',
	}
	return (
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

export default connect((store: RootState) => store.auth, {
	login: loginActions.login,
})(LoginForm)
