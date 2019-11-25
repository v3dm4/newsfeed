import React, { Component } from 'react'
import './App.css'
import { Router } from '@reach/router'
import { NavBar } from './components/layout/NavBar'
import { Content } from './components/layout/Content'
import ErrorBoundary from './components/ErrorBoundary'

const MainPage = React.lazy(() => import('./pages/main'))
const NewsPage = React.lazy(() => import('./pages/news'))
const ProfilePage = React.lazy(() => import('./pages/profile'))
const LoginPage = React.lazy(() => import('./pages/login'))

class App extends Component {
	render() {
		return (
			<ErrorBoundary>
				<div className='container'>
					<NavBar />
					<React.Suspense fallback={<div>...Loading</div>}>
						<Content>
							<Router>
								<MainPage path='/' />
								<NewsPage path='/news' />
								<ProfilePage path='/profile' />
								<LoginPage path='/login' />
							</Router>
						</Content>
					</React.Suspense>
				</div>
			</ErrorBoundary>
		)
	}
}

export default App
