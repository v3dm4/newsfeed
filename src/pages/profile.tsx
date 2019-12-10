import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { PageContainer } from '../components/ui/PageContainer'
import { SettingsPanel } from '../components/profile/SettingsPanel'

const ProfilePage: React.FC<RouteComponentProps> = () => {
    return (
        <PageContainer>
          <SettingsPanel/>
        </PageContainer>
    )
}

export default ProfilePage