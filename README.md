![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange?style=flat-square) ![Versão](https://img.shields.io/badge/Versão-1.0.0-blue?style=flat-square)



# API de Avaliação Física Escolar – Charqueadas

API desenvolvida para a **Prefeitura Municipal de Charqueadas** e a **Secretaria Municipal de Educação**, com o objetivo de gerenciar e analisar avaliações físicas de alunos da rede pública. Permite o registro completo de dados antropométricos, resultados de testes físicos e análises comparativas com parâmetros de referência por idade e gênero.

---

## 🚀 Funcionalidades

- Cadastro e gerenciamento de alunos com dados físicos completos
- Registro de testes de aptidão física padronizados
- Cálculo automático de **IMC** e **RCE**
- Comparação com parâmetros de saúde e desempenho por faixa etária e gênero
- Avaliação individual e por grupo de desempenho físico
- API com operações completas de **CRUD**

---

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org) (versão 14 ou superior)
- [MySQL](https://www.mysql.com/) (versão 5.7 ou superior)
- npm ou yarn

---

## ⚙️ Tecnologias Utilizadas

![TypeScript](https://img.shields.io/badge/TypeScript-4.0%2B-blue?style=flat-square)<br>
![Node.js](https://img.shields.io/badge/Node.js-14%2B-green?style=flat-square)<br>
![Express](https://img.shields.io/badge/Express-4.x-black?style=flat-square)<br>
![MySQL](https://img.shields.io/badge/MySQL-5.7%2B-orange?style=flat-square)<br>
![dotenv](https://img.shields.io/badge/dotenv-supported-lightgrey?style=flat-square)<br>
![CORS](https://img.shields.io/badge/CORS-enabled-yellow?style=flat-square)<br>

---

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados:

```bash
mysql -u root -p < db.sql
```

4. Crie um arquivo `.env` com as seguintes variáveis de ambiente:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=prefeitura_db
```

5. Inicie o servidor em modo de desenvolvimento:

```bash
npm run dev
```

---

## 📦 Estrutura do Projeto

```
src/
├── config/
│   ├── database.ts
│   └── parameters.json
├── controllers/
│   └── AlunoController.ts
├── models/
│   └── Aluno.ts
├── routes/
│   └── alunoRoutes.ts
└── app.ts
```

---

## 🛠️ Endpoints da API

### Alunos

- `POST /api/alunos` – Criar um novo aluno
- `GET /api/alunos` – Listar todos os alunos
- `GET /api/alunos/:id` – Obter dados de um aluno específico
- `PUT /api/alunos/:id` – Atualizar dados de um aluno
- `DELETE /api/alunos/:id` – Remover um aluno

---

## 📤 Exemplo de Requisição (JSON)

```json
{
  "nome": "Jorge Santos",
  "idade": 12,
  "genero": "M",
  "escola": "EMEF Pio XII",
  "altura": 150,
  "peso": 45.5,
  "envergadura": 152,
  "perimetroDaCintura": 70,
  "testeDeFlexibilidade": 30,
  "testeAbdominal": 25,
  "testeDeVelocidade": 3.5,
  "testeDeAgilidade": 4.2,
  "testeMedicineBall": 300,
  "teste6Minutos": 1000,
  "testeDeSalto": 150
}
```

---

## 📥 Exemplo de Resposta

```json
{
  "name": "Jorge Santos",
  "age": 12,
  "gender": "M",
  "school": "EMEF Pio XII",
  "height": 150,
  "weight": 45.5,
  "spread": 152,
  "waist": 70,
  "flexibility": 30,
  "abdominal": 25,
  "speed": 3.5,
  "agility": 4.2,
  "strength": 300,
  "sixMin": 1000,
  "jump": 150,
  "imc": 20.22,
  "rce": 0.47,
  "results": {
    "imc": true,
    "rce": true,
    "flexibility": true,
    "abdominal": true,
    "speed": true,
    "agility": true,
    "strength": true,
    "sixMin": true,
    "jump": true
  }
}
```

---

## 📊 Parâmetros Avaliados

- **IMC** (Índice de Massa Corporal)
- **RCE** (Relação Cintura-Estatura)
- **Flexibilidade**
- **Força Abdominal**
- **Velocidade**
- **Agilidade**
- **Força de Membros Superiores**
- **Resistência Aeróbica**
- **Força Explosiva de Membros Inferiores**

---

## 🤝 Contribuições

Este projeto foi desenvolvido para uso institucional, mas contribuições são bem-vindas. Sinta-se livre para abrir **issues**, sugerir melhorias ou enviar pull requests.

---

Projeto mantido pela **Prefeitura Municipal de Charqueadas** e **Secretaria Municipal de Educação**.