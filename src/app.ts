import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import alunoRoutes from './routes/alunoRoutes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', alunoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});