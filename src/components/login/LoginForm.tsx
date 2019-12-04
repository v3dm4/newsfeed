import React from 'react'
import { Form } from '../ui/Form/Form'
import { useFormik } from 'formik'
import { FormLabel } from '../ui/Form/FormLabel'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { FormElement } from '../ui/Form/FormElement'

interface IFormValues {
	email: string
	password: string
}

export const LoginForm: React.FC = (): JSX.Element => {
	const [login, setLogin] = React.useState(true)
	const initialValues: IFormValues = {
		email: '',
		password: '',
	}
	const formik = useFormik({
		initialValues,
		onSubmit: values => {},
	})
	return (
		<Form onSubmit={formik.handleSubmit} minWidth={300}>
			<FormElement></FormElement>
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
				<Button type='submit'>Войти</Button>
			</FormElement>
		</Form>
	)
}
