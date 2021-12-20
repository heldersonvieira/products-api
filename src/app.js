import express from 'express';
import { AppErros } from './errors/messages.js';
import { router } from './routes/index.js';

const app = express();
app.use(express.json());
app.use(router);

// app.use((err, req, res, next) => {
//     if (err instanceof AppErros) {
//         return res.status(err.statusCode).json({ message: err.message });
//     }

//     return res.status(500).json({
//         status: 'error',
//         message: `Internal SERVER error = ${err.message}`,
//     });
// });

export { app };
