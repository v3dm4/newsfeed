import React from 'react'
import { Form } from '../ui/Form/Form'
import { useFormik } from 'formik'
import { FormLabel } from '../ui/Form/FormLabel'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { FormElement } from '../ui/Form/FormElement'
import { Tabs } from '../ui/Tabs'
import { availableTabs } from './const'

interface IFormValues {
	email: string
	password: string
}

export const LoginForm: React.FC = (): JSX.Element => {
	const [activeTab, setActiveTab] = React.useState('signIn')
	const initialValues: IFormValues = {
		email: '',
		password: '',
	}
	const formik = useFormik({
		initialValues,
		onSubmit: values => {},
	})
	return (
		<Form minWidth={360}>
			<Form.Header>
				<Tabs
					tabs={availableTabs}
					activeTab={activeTab}
					onChange={value => setActiveTab(value)}
				/>
			</Form.Header>
			<Form.Content onSubmit={formik.handleSubmit}>
				<FormElement>
					<FormLabel htmlFor='email'>Email</FormLabel>
				</FormElement>
				<Input
					id='email'
					name='email'
					type='email'
					value={formik.values.email}
					onChange={formik.handleChange}
				/>
				<FormElement>
					<FormLabel htmlFor='password'>Пароль</FormLabel>
				</FormElement>
				<Input
					id='password'
					name='password'
					type='password'
					value={formik.values.password}
					onChange={formik.handleChange}
				/>
				<FormElement margin='l'>
					<Button type='submit'>
						{activeTab === 'signIn' ? 'Войти' : 'Подтвердить'}
					</Button>
				</FormElement>
			</Form.Content>
		</Form>
	)
}
