import { Router } from 'express';
import { AlunoController } from "../controllers/AlunoController";

const router = Router();
const alunoController = new AlunoController();

router.post('/alunos', alunoController.create);
router.get('/alunos', alunoController.getAll);
router.get('/alunos/:id', alunoController.getById);
router.put('/alunos/:id', alunoController.update);
router.delete('/alunos/:id', alunoController.delete);

export default router;