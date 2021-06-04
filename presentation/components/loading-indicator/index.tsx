import * as React from 'react'
import * as Styled from './loading-indicator.styles'
import { Spinner } from 'reactstrap'

const LoadingIndicator: React.FC = () => {
	return (
		<Styled.SpinnerWrapper>
			<Spinner color="primary" />
		</Styled.SpinnerWrapper>
	)
}

export default LoadingIndicator
