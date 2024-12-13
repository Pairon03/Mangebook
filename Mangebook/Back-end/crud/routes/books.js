// Importa as dependências necessárias
const express = require('express'); // Framework para criar o servidor HTTP
const multer = require('multer'); // Middleware para upload de arquivos (neste caso, imagens)
const mongoose = require('mongoose'); // Biblioteca para interagir com o MongoDB
const path = require('path'); // Utilitário para manipulação de caminhos de arquivos
const Book = require('../models/Book'); // Modelo de livro, importado do arquivo de modelo
const router = express.Router(); // Cria uma instância do roteador Express

// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
  // Definindo onde os arquivos enviados serão armazenados
  destination: (req, file, cb) => {
    cb(null, 'public/'); // Pasta onde as imagens serão salvas (deve existir ou ser criada)
  },
  // Definindo o nome do arquivo enviado
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nome do arquivo será a data atual + extensão original
  },
});

const upload = multer({ storage }); // Instância do multer com a configuração de armazenamento

// Rota para listar todos os livros
router.get('/', async (req, res) => {
  try {
    const books = await Book.find(); // Busca todos os livros no banco de dados
    res.status(200).json(books); // Retorna todos os livros como resposta
  } catch (error) {
    console.error('Erro ao buscar os livros:', error);
    res.status(500).json({ error: 'Erro ao buscar os livros' }); // Retorna erro se houver falha
  }
});

// Rota para criar um novo livro
router.post('/', upload.single('image'), async (req, res) => {
  const { title, author, description } = req.body; // Extrai os dados do corpo da requisição

  try {
    const newBook = new Book({
      title,
      author,
      description,
      // Armazena o caminho da imagem (se fornecida) no campo `coverUrl`
      coverUrl: req.file ? `/public/${req.file.filename}` : null,
    });

    await newBook.save(); // Salva o novo livro no banco de dados
    res.status(201).json(newBook); // Retorna o novo livro com a URL da imagem
  } catch (error) {
    console.error('Erro ao criar o livro:', error);
    res.status(500).json({ error: 'Erro ao criar o livro' }); // Retorna erro se houver falha
  }
});

// Rota para editar um livro existente pelo ID
router.put('/:id', upload.single('image'), async (req, res) => {
  const { id } = req.params; // Obtém o ID do livro a ser editado
  const { title, author, description } = req.body; // Extrai os dados do corpo da requisição

  // Verifica se o ID é válido para o MongoDB
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido para o MongoDB' });
  }

  try {
    const updatedData = {}; // Objeto que conterá os dados a serem atualizados
    if (title) updatedData.title = title;
    if (author) updatedData.author = author;
    if (description) updatedData.description = description;
    if (req.file) {
      updatedData.coverUrl = `/public/${req.file.filename}`; // Atualiza o caminho da imagem, se fornecida
    }

    // Atualiza o livro no banco de dados com os novos dados
    const updatedBook = await Book.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ error: 'Livro não encontrado para atualização' });
    }

    res.status(200).json(updatedBook); // Retorna o livro atualizado
  } catch (error) {
    console.error('Erro ao atualizar o livro:', error);
    res.status(500).json({ error: 'Erro ao atualizar o livro' }); // Retorna erro se houver falha
  }
});

// Rota para excluir um livro pelo ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params; // Obtém o ID do livro a ser excluído

  // Verifica se o ID é válido para o MongoDB
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido para o MongoDB' });
  }

  try {
    const deletedBook = await Book.findByIdAndDelete(id); // Deleta o livro no banco de dados
    if (!deletedBook) {
      return res.status(404).json({ error: 'Livro não encontrado para exclusão' });
    }

    res.status(200).json({ message: 'Livro excluído com sucesso', book: deletedBook }); // Retorna mensagem de sucesso com o livro deletado
  } catch (error) {
    console.error('Erro ao excluir o livro:', error);
    res.status(500).json({ error: 'Erro ao excluir o livro' }); // Retorna erro se houver falha
  }
});

// Exporta as rotas para serem usadas no servidor
module.exports = router;
