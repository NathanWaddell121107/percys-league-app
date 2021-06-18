import * as React from 'react'
import Head from 'next/head'
import { GlobalStyle } from '../global-theme'
import Header from '../header'

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<Head>
				<title>Percys League</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			{children}
		</>
	)
}

export default Layout
