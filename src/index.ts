import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import footballRouter from './routes/football';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const PORT = process.env.PORT || 5500;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/football', footballRouter);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});
