import React from 'react'
import { Link as RouterLink, LinkGetProps } from '@reach/router'

const isActive = ({isCurrent}: LinkGetProps) => {
  return isCurrent ? {className: 'active'} : null
} 
 
// need to figure out how to handle type of LinkProps with it
export const Link: React.FC<any> = (props): JSX.Element => {
	return <RouterLink getProps={isActive} {...props}/>
}
