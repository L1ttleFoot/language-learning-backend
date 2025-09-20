import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import router from './routes';

const app = express();

const PORT = process.env.PORT || 8080;

dotenv.config();

const allowedOrigins = ['http://localhost:5173', 'http://192.168.1.66:5173'];

app.use(
	cors({
		origin: allowedOrigins,
		credentials: true,
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	}),
);
app.use(express.json());
app.use('/api', router);
app.get('/', (_, res) => {
	res.status(200).json({message: 'Hello World'});
});
app.all('/{*any}', (_, res) => {
	res.status(404).json({message: 'Not found'});
});

async function main() {
	app.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	});
}

main();

export default app;
