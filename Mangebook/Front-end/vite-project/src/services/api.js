import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Certifique-se de usar a porta do backend
});

export default {
  getBooks() {
    return api.get('/books');
  },
  addBook(book) {
    return api.post('/books', book);
  },
  updateBook(id, book) {
    return api.put(`/books/${id}`, book); // Certifique-se de usar o _id gerado pelo MongoDB
  },
  deleteBook(id) {
    return api.delete(`/books/${id}`);
  },
};
