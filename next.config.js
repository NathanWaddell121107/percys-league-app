require('dotenv').config({ path: './.env' })

let config = {
	env: {
		AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
		AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
		AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
		AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
		AUTH0_SECRET: process.env.AUTH0_SECRET,
		MONGODB_DB: process.env.MONGODB_DB,
		MONGODB_URI: process.env.MONGODB_URI
	},
	webpack: (config) => {
		config.node = {
			net: 'empty',
			tls: 'empty'
		}
		return config
	}
}

module.exports = config
