import { Request, Response } from 'express';
import pool from '../config/database';
import Aluno from '../models/Aluno';
import { ResultSetHeader } from 'mysql2';

export class AlunoController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const {
                nome, idade, genero, escola, altura, peso,
                envergadura, perimetroDaCintura, testeDeFlexibilidade,
                testeAbdominal, testeDeVelocidade, testeDeAgilidade,
                testeMedicineBall, teste6Minutos, testeDeSalto
            } = req.body;

            const aluno = new Aluno(
                nome, idade, genero, escola, altura, peso,
                envergadura, perimetroDaCintura, testeDeFlexibilidade,
                testeAbdominal, testeDeVelocidade, testeDeAgilidade,
                testeMedicineBall, teste6Minutos, testeDeSalto
            );

            const analise = aluno.analyse();

            // Especificando o tipo do resultado como ResultSetHeader
            const [result] = await pool.execute<ResultSetHeader>(
                `INSERT INTO alunos (nome, idade, genero, escola, altura, peso, 
                    envergadura, perimetroDaCintura, testeDeFlexibilidade, 
                    testeAbdominal, testeDeVelocidade, testeDeAgilidade, 
                    testeMedicineBall, teste6Minutos, testeDeSalto) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [nome, idade, genero, escola, altura, peso, envergadura,
                    perimetroDaCintura, testeDeFlexibilidade, testeAbdominal,
                    testeDeVelocidade, testeDeAgilidade, testeMedicineBall,
                    teste6Minutos, testeDeSalto]
            );

            return res.status(201).json({ id: result.insertId, ...req.body, analise });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const [alunos] = await pool.execute('SELECT * FROM alunos');
            return res.json(alunos);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async getById(req: Request, res: Response): Promise<Response> {
        try {
            const [rows]: any = await pool.execute(
                'SELECT * FROM alunos WHERE id = ?',
                [req.params.id]
            );

            if (!rows.length) {
                return res.status(404).json({ message: 'Aluno não encontrado' });
            }

            const alunoData = rows[0];
            const aluno = new Aluno(
                alunoData.nome, alunoData.idade, alunoData.genero,
                alunoData.escola, alunoData.altura, alunoData.peso,
                alunoData.envergadura, alunoData.perimetroDaCintura,
                alunoData.testeDeFlexibilidade, alunoData.testeAbdominal,
                alunoData.testeDeVelocidade, alunoData.testeDeAgilidade,
                alunoData.testeMedicineBall, alunoData.teste6Minutos,
                alunoData.testeDeSalto
            );

            const analise = aluno.analyse();
            return res.json({ ...alunoData, analise });
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const [result] = await pool.execute<ResultSetHeader>(
                `UPDATE alunos SET 
                nome = ?, idade = ?, genero = ?, escola = ?, 
                altura = ?, peso = ?, envergadura = ?, 
                perimetroDaCintura = ?, testeDeFlexibilidade = ?, 
                testeAbdominal = ?, testeDeVelocidade = ?, 
                testeDeAgilidade = ?, testeMedicineBall = ?, 
                teste6Minutos = ?, testeDeSalto = ? 
                WHERE id = ?`,
                [...Object.values(req.body), req.params.id]
            );

            if (!result.affectedRows) {
                return res.status(404).json({ message: 'Aluno não encontrado' });
            }

            return res.json({ ...req.body, id: req.params.id });
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            const [result] = await pool.execute<ResultSetHeader>(
                'DELETE FROM alunos WHERE id = ?',
                [req.params.id]
            );

            if (!result.affectedRows) {
                return res.status(404).json({ message: 'Aluno não encontrado' });
            }

            return res.json({ message: 'Aluno deletado com sucesso' });
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }
}