// Importa os módulos necessários
const express = require('express'); // Framework para criar o servidor HTTP
const mongoose = require('mongoose'); // Biblioteca para interagir com o MongoDB
const cors = require('cors'); // Middleware para permitir requisições de diferentes origens (Cross-Origin Resource Sharing)
const bcrypt = require('bcryptjs'); // Biblioteca para hashing de senhas
require('dotenv').config();  // Carrega as variáveis de ambiente do arquivo .env

// Inicialização do app
const app = express(); // Cria uma instância do servidor Express
app.use(cors()); // Permite requisições de diferentes origens
app.use(express.json()); // Middleware para parsear o corpo das requisições como JSON

// Conexão ao MongoDB
mongoose.connect('mongodb+srv://CauaMoura9:caua9@library.9fjwj.mongodb.net/library')
  .then(() => console.log('MongoDB conectado')) // Exibe no console se a conexão for bem-sucedida
  .catch(err => console.error('Erro ao conectar ao MongoDB', err)); // Exibe no console se ocorrer um erro na conexão

// Importação das rotas
const booksRoutes = require('./routes/books'); // Importa as rotas para livros
app.use('/api/books', booksRoutes); // Usa as rotas para livros com o prefixo '/api/books'

const adminRoutes = require('./routes/admin'); // Importa as rotas para administrador
app.use(adminRoutes); // Usa as rotas de administrador

// Definir a porta do Servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000'); // Inicia o servidor na porta 3000
});
