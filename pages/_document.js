// _document.js
// If you do not have a _document.js file create it in your pages folder.
// paste the below code into it or copy the getInitialProps

import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet()
		const page = renderPage((App) => (props) =>
			sheet.collectStyles(<App {...props} />)
		)
		const styleTags = sheet.getStyleElement()
		return { ...page, styleTags }
	}

	render() {
		return (
			<Html lang="en">
				<Head>{this.props.styleTags}</Head>
				<body
					style={{
						margin: 0,
						fontFamily: 'Mukta Vaani, sans-serif',
						backgroundColor: '#2e2e2e',
						color: '#e6e6e6'
					}}>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
