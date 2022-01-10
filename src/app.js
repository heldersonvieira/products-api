import express from 'express';
import 'express-async-errors';
import { router } from './routes/index.js';
import { AppError } from './shared/errors/AppError.js';

const app = express();
app.use(express.json());
app.use(router);

app.use((err, request, response, next) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
        status: 'error',
        message: `Internal server error - ${err.message}`,
    });
});

export { app };
