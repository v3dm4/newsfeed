import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import LoginForm from '../components/login/LoginForm'
import { PageContainer } from '../components/ui/PageContainer'

const LoginPage: React.FC<RouteComponentProps> = () => {
	return (
		<PageContainer>
			<LoginForm />
		</PageContainer>
	)
}

export default LoginPage
