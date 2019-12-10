import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import { Router } from '@reach/router'
import { NavHOC as NavBar } from './components/layout/Nav/NavBar'
import { Content } from './components/layout/Content'
import ErrorBoundary from './utils/ErrorBoundary'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import * as availableThemes from './theme'
import {
	useWindowDimensions,
	IWindowSize,
} from './utils/hooks/useWindowDimensions'
import { PrivateRoute } from './utils/privateRoute'
import { checkToken } from './services/actions/auth/checkToken'

const MainPage = React.lazy(() => import('./pages/main'))
const NewsPage = React.lazy(() => import('./pages/news'))
const ProfilePage = React.lazy(() => import('./pages/profile'))
const LoginPage = React.lazy(() => import('./pages/auth'))

const GlobalStyle = createGlobalStyle`
	body {
		color: ${props => props.theme.text};
		background-color: ${props => props.theme.bg};
		transition: all 200ms ease;
	}
`

interface AppContext {
	size: IWindowSize
	changeTheme: (value: boolean) => void
}

export const AppContext = React.createContext<AppContext>({
	size: 'm',
	changeTheme: () => {},
})

type DispatchProps = {
	checkAuthToken: typeof checkToken
}

const App: React.FC<DispatchProps> = ({ checkAuthToken }): JSX.Element => {
	const { size } = useWindowDimensions()
	const [theme, setTheme] = React.useState(availableThemes.lightTheme)

	const changeTheme = (value: boolean) => {
		const theme = value ? availableThemes.lightTheme : availableThemes.darkTheme
		setTheme(theme)
	}

	React.useEffect(() => {
		checkAuthToken()
	}, [])

	return (
		<ErrorBoundary>
			<div className='container'>
				<AppContext.Provider value={{ size, changeTheme }}>
					<ThemeProvider theme={theme}>
						<NavBar />
						<GlobalStyle />
						<React.Suspense fallback={<div>...Loading</div>}>
							<Content>
								<Router>
									<MainPage path='/' />
									<NewsPage path='/news' />
									<PrivateRoute as={ProfilePage} path='/profile' />
									<LoginPage path='/login' />
								</Router>
							</Content>
						</React.Suspense>
					</ThemeProvider>
				</AppContext.Provider>
			</div>
		</ErrorBoundary>
	)
}

export default connect(null, { checkAuthToken: checkToken })(App)
