// Importa o módulo axios para fazer requisições HTTP.
import axios from 'axios';

// Cria uma instância do axios com uma URL base, que aponta para a API backend.
// O `baseURL` deve corresponder ao endereço onde o backend está sendo executado.
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Certifique-se de usar a porta correta do backend.
});

// Exporta um objeto com funções para realizar operações na API relacionadas a livros.
// Essas funções representam o CRUD (Create, Read, Update, Delete) para a entidade "books".
export default {
  // Função para buscar todos os livros.
  // Faz uma requisição GET para o endpoint `/books`.
  getBooks() {
    return api.get('/books');
  },

  // Função para adicionar um novo livro.
  // Faz uma requisição POST para o endpoint `/books` com o objeto do livro como payload.
  addBook(book) {
    return api.post('/books', book);
  },

  // Função para atualizar os dados de um livro existente.
  // Faz uma requisição PUT para o endpoint `/books/{id}` com o ID do livro e os novos dados.
  updateBook(id, book) {
    return api.put(`/books/${id}`, book); // Certifique-se de usar o _id gerado pelo MongoDB.
  },

  // Função para excluir um livro.
  // Faz uma requisição DELETE para o endpoint `/books/{id}` utilizando o ID do livro.
  deleteBook(id) {
    return api.delete(`/books/${id}`);
  },
};
