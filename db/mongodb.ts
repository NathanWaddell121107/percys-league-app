import { MongoClient } from 'mongodb'

const { MONGODB_URI, MONGODB_DB } = process.env

if (!MONGODB_URI) {
	throw new Error(
		'Please define the MONGODB_URI environment variable inside .env.local'
	)
}

if (!MONGODB_DB) {
	throw new Error(
		'Please define the MONGODB_DB environment variable inside .env.local'
	)
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
declare global {
	namespace NodeJS {
		interface Global {
			mongo: MongoClient | null
		}
	}
}

let cached = global.mongo

export async function connectToDatabase() {
	if (cached) {
		return cached
	}

	if (!cached) {
		const opts = {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}

		cached = await MongoClient.connect(MONGODB_URI ?? '', opts)
	}
	return cached
}
