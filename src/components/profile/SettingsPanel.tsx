import React from 'react'
import { Panel } from '../ui/Panel/Panel'
import { ThemeSwitcher } from '../common/ThemeSwitcher'
import { AppContext } from '../../App'

export const SettingsPanel: React.FC = (): JSX.Element => {
  const {size} = React.useContext(AppContext)
  return (
    <Panel minWidth={size === 's' ? 360 : '80%'}>
      <Panel.Header>
        НАСТРОЙКИ
      </Panel.Header>
      <Panel.Content>
        { size === 's' && (<>Тема
        <ThemeSwitcher /></>)}
      </Panel.Content>  
    </Panel>  
  )
}
