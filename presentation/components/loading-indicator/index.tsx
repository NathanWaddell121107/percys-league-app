import * as React from 'react'
import { Spinner } from 'reactstrap'
import * as Styled from './loading-indicator.styles'

const LoadingIndicator: React.FC = () => {
	return (
		<Styled.SpinnerWrapper>
			<Spinner color="primary" />
		</Styled.SpinnerWrapper>
	)
}

export default LoadingIndicator
