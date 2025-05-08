CREATE DATABASE IF NOT EXISTS prefeitura_db;
USE prefeitura_db;

CREATE TABLE alunos (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        nome VARCHAR(255) NOT NULL,
                        idade INT NOT NULL,
                        genero ENUM('M', 'F') NOT NULL,
                        escola VARCHAR(255) NOT NULL,
                        altura DECIMAL(5,2) NOT NULL,
                        peso DECIMAL(5,2) NOT NULL,
                        envergadura DECIMAL(5,2) NOT NULL,
                        perimetroDaCintura DECIMAL(5,2) NOT NULL,
                        testeDeFlexibilidade DECIMAL(5,2) NOT NULL,
                        testeAbdominal DECIMAL(5,2) NOT NULL,
                        testeDeVelocidade DECIMAL(5,2) NOT NULL,
                        testeDeAgilidade DECIMAL(5,2) NOT NULL,
                        testeMedicineBall DECIMAL(5,2) NOT NULL,
                        teste6Minutos DECIMAL(5,2) NOT NULL,
                        testeDeSalto DECIMAL(5,2) NOT NULL,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);