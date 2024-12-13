<template>
  <div class="book-list-container">
    <BookForm @book-added="fetchBooks" @book-updated="fetchBooks" :bookToEdit="bookToEdit" />

    <section class="livros-section">
      <h2>Lista de Livros</h2>
      <ul class="book-list">
        <li v-for="book in books" :key="book._id" class="livro-item">
          <div class="book-details">
            <img v-if="book.image" :src="book.image" alt="Capa do livro" class="book-image" />
            <span class="book-title">{{ book.title }} - {{ book.author }} ({{ book.description }})</span>
            <div class="book-actions">
              <button @click="editBook(book)" class="edit-btn">Editar</button>
              <button @click="deleteBook(book._id)" class="delete-btn">Excluir</button>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import api from '../services/api';
import BookForm from './BookForm.vue';

export default {
  components: {
    BookForm,
  },
  data() {
    return {
      books: [],
      bookToEdit: null,
    };
  },
  methods: {
    fetchBooks() {
  api.getBooks().then((response) => {
    this.books = response.data; // Garante que os IDs estejam disponíveis
  }).catch(err => {
    console.error("Erro ao buscar livros:", err);
  });

  },
  deleteBook(id) {
  api.deleteBook(id).then(() => {
    this.fetchBooks(); // Atualiza a lista após exclusão
  }).catch(err => {
    console.error("Erro ao excluir livro:", err);
  });
},
editBook(book) {
  this.bookToEdit = { ...book }; // Clona o livro para edição
},

},
  mounted() {
    this.fetchBooks();
  },
};
</script>

<style scoped>
/* Ajuste de estilo baseado em outros componentes */

.book-list-container {
  padding: 20px;
  background-color: #f9f9f9;
}

.livros-section {
  padding: 20px;
  background-color: #ffffff;
}

.book-list {
  list-style-type: none;
  padding: 0;
}

.livro-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.book-details {
  display: flex;
  align-items: center;
  gap: 15px;
}

.book-image {
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.book-title {
  font-size: 1.2em;
  color: #333;
  flex-grow: 1;
}

.book-actions {
  display: flex;
  gap: 10px;
}

.edit-btn,
.delete-btn {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-btn {
  background-color: #00aaff;
}

.delete-btn {
  background-color: #ff4d4d;
}

.edit-btn:hover,
.delete-btn:hover {
  opacity: 0.8;
}
</style>
