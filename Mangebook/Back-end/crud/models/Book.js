const mongoose = require('mongoose');

// Definindo o esquema do livro
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Título do livro
  author: { type: String, required: true }, // Autor do livro
  year: { type: Number, required: false }, // Ano do livro (não obrigatório)
  coverUrl: { type: String, required: false }, // URL da imagem do livro (não obrigatória)
});

// Exportando o modelo  
module.exports = mongoose.model('Book', BookSchema);
