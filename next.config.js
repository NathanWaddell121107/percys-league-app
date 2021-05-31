require('dotenv').config({ path: './.env' })

let config = {
	env: {
		MONGODB_URI: process.env.MONGODB_URI,
		MONGODB_DB: process.env.MONGODB_DB
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
