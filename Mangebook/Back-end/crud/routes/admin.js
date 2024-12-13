// Importa as dependências necessárias
const express = require('express'); // Framework para criar o servidor HTTP
const router = express.Router(); // Cria uma instância do roteador Express
const bcrypt = require('bcryptjs'); // Biblioteca para criptografar e comparar senhas
const jwt = require('jsonwebtoken'); // Biblioteca para gerar e verificar tokens JWT
const Admin = require('../models/Admin'); // Modelo Admin para interagir com a coleção de administradores no MongoDB

// Rota de Login do Administrador
router.post('/admin-login', async (req, res) => {
  const { username, password } = req.body; // Extrai o nome de usuário e a senha do corpo da requisição

  try {
    console.log(`Buscando usuário: ${username}`);
    
    // Verifica se o administrador existe no banco de dados de maneira case-insensitive
    const admin = await Admin.findOne({ username: new RegExp(`^${username}$`, 'i') });
    console.log(`Usuário encontrado: ${admin ? 'Sim' : 'Não'}`);

    if (!admin) {
      // Se o usuário não for encontrado, retorna erro
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Compara a senha fornecida com a senha criptografada no banco de dados
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      // Se as senhas não coincidirem, retorna erro
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    // Gera um token JWT com o ID e o papel do administrador
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET || 'yourSecretKey', // Utiliza uma variável de ambiente para maior segurança
      { expiresIn: '1h' } // Define o tempo de expiração do token como 1 hora
    );

    // Envia o token como resposta
    res.json({ token, message: 'Login bem-sucedido' });
  } catch (error) {
    console.error('Erro no servidor:', error);
    res.status(500).json({ error: 'Erro no servidor' }); // Retorna erro em caso de falha
  }
});

// Rota para criar um novo administrador
router.post('/admin-register', async (req, res) => {
  const { username, password } = req.body; // Extrai o nome de usuário e a senha do corpo da requisição

  try {
    // Verifica se o administrador já existe no banco de dados
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      // Se o usuário já existir, retorna erro
      return res.status(400).json({ error: 'Usuário já existe' });
    }

    // Criptografa a senha antes de salvá-la
    const salt = await bcrypt.genSalt(10); // Gera um salt para o bcrypt
    const hashedPassword = await bcrypt.hash(password, salt); // Criptografa a senha com o salt

    // Cria um novo administrador com os dados fornecidos
    const newAdmin = new Admin({
      username,
      password: hashedPassword, // Armazena a senha criptografada
    });

    // Salva o novo administrador no banco de dados
    await newAdmin.save();
    res.status(201).json({ message: 'Administrador criado com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar administrador:', error);
    res.status(500).json({ error: 'Erro ao cadastrar administrador' }); // Retorna erro em caso de falha
  }
});

// Exporta as rotas para serem usadas no servidor
module.exports = router;
