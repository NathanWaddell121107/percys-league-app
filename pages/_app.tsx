import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

export const MyApp = (props: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<link
					href="https://use.fontawesome.com/releases/v5.12.1/css/svg-with-js.css"
					rel="stylesheet"
				/>
			</Head>
			<props.Component {...props.pageProps} />
		</>
	)
}

export default MyApp
