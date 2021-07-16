import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { UserProvider } from '@auth0/nextjs-auth0'

export const MyApp = (props: AppProps): JSX.Element => {
	return (
		<UserProvider>
			<Head>
				<link
					href="https://use.fontawesome.com/releases/v5.12.1/css/svg-with-js.css"
					rel="stylesheet"
				/>
			</Head>
			<props.Component {...props.pageProps} />
		</UserProvider>
	)
}

export default MyApp
