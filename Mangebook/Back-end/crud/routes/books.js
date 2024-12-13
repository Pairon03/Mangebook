const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
const Book = require('../models/Book');
const router = express.Router();

// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/'); // A pasta 'uploads/' deve ser criada manualmente ou configurada para ser criada automaticamente
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Listar todos os livros
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books); // Retorna todos os livros com a URL da imagem
  } catch (error) {
    console.error('Erro ao buscar os livros:', error);
    res.status(500).json({ error: 'Erro ao buscar os livros' });
  }
});

// Criar novo livro
router.post('/', upload.single('image'), async (req, res) => {
  const { title, author, description } = req.body;

  try {
    const newBook = new Book({
      title,
      author,
      description,
      coverUrl: req.file ? `/public/${req.file.filename}` : null, // Salva o caminho relativo da imagem
    });

    await newBook.save();
    res.status(201).json(newBook); // Retorna o novo livro com a URL da imagem
  } catch (error) {
    console.error('Erro ao criar o livro:', error);
    res.status(500).json({ error: 'Erro ao criar o livro' });
  }
});

// Editar livro pelo ID
router.put('/:id', upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { title, author, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido para o MongoDB' });
  }

  try {
    const updatedData = {};
    if (title) updatedData.title = title;
    if (author) updatedData.author = author;
    if (description) updatedData.description = description;
    if (req.file) {
      updatedData.coverUrl = `/public/${req.file.filename}`; // Atualiza o caminho da imagem
    }

    const updatedBook = await Book.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ error: 'Livro não encontrado para atualização' });
    }

    res.status(200).json(updatedBook); // Retorna o livro atualizado com a URL da imagem
  } catch (error) {
    console.error('Erro ao atualizar o livro:', error);
    res.status(500).json({ error: 'Erro ao atualizar o livro' });
  }
});

// Deletar livro pelo ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido para o MongoDB' });
  }

  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Livro não encontrado para exclusão' });
    }

    res.status(200).json({ message: 'Livro excluído com sucesso', book: deletedBook });
  } catch (error) {
    console.error('Erro ao excluir o livro:', error);
    res.status(500).json({ error: 'Erro ao excluir o livro' });
  }
});

module.exports = router;
