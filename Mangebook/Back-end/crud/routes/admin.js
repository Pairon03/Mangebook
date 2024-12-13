const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

// Rota de Login do Administrador
router.post('/admin-login', async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log(`Buscando usuário: ${username}`);
    
    // Verificar se o administrador existe no banco de dados (case-insensitive)
    const admin = await Admin.findOne({ username: new RegExp(`^${username}$`, 'i') });
    console.log(`Usuário encontrado: ${admin ? 'Sim' : 'Não'}`);

    if (!admin) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Comparar a senha fornecida com a armazenada no banco
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    // Gerar um token JWT
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET || 'yourSecretKey', // Use uma variável de ambiente para maior segurança
      { expiresIn: '1h' }
    );

    // Enviar o token como resposta
    res.json({ token, message: 'Login bem-sucedido' });
  } catch (error) {
    console.error('Erro no servidor:', error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

// Rota para criar um novo administrador
router.post('/admin-register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verificar se o administrador já existe
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }

    // Criptografar a senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Criar novo administrador
    const newAdmin = new Admin({
      username,
      password: hashedPassword, // Salvar senha criptografada
    });

    await newAdmin.save();
    res.status(201).json({ message: 'Administrador criado com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar administrador:', error);
    res.status(500).json({ error: 'Erro ao cadastrar administrador' });
  }
});

module.exports = router;
