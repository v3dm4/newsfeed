import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { PageContainer } from '../components/layout/PageContainer'
import { SettingsPanel } from '../components/pages/profile/SettingsPanel'

const ProfilePage: React.FC<RouteComponentProps> = () => {
	return (
		<PageContainer>
			<SettingsPanel />
		</PageContainer>
	)
}

export default ProfilePage
