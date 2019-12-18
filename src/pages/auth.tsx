import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { LoginForm } from '../components/pages/login/LoginForm'
import { PageContainer } from '../components/layout/PageContainer'

const LoginPage: React.FC<RouteComponentProps> = () => {
	return (
		<PageContainer direction="column">
			<LoginForm />
		</PageContainer>
	)
}

export default LoginPage
