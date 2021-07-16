import * as React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import LoadingIndicator from '../loading-indicator'
import * as Styled from './main-page.styles'

const MainPage: React.FC = () => {
	const { user, error, isLoading } = useUser()

	const displayUserInformation = (): string | JSX.Element => {
		if (isLoading) {
			return <LoadingIndicator />
		} else if (error) {
			return 'Uh-oh, looks like there was an error trying to login.'
		} else if (!user) {
			return 'Please login or signup to get started!'
		} else {
			return `Welcome back, ${user.name}! Head to the players page to get started.`
		}
	}

	return (
		<Styled.MainPageWrapper>{displayUserInformation()}</Styled.MainPageWrapper>
	)
}

export default MainPage
