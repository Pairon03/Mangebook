<template>
  <div class="book-list-container">
    <!-- Componente para adicionar/editar livros -->
    <BookForm 
      @book-added="fetchBooks" <!-- Atualiza a lista quando um livro é adicionado -->
      @book-updated="fetchBooks" <!-- Atualiza a lista quando um livro é editado -->
      :bookToEdit="bookToEdit" <!-- Passa o livro a ser editado para o formulário -->
    />

    <!-- Lista de Livros -->
    <section class="livros-section">
      <h2>Lista de Livros</h2>
      <!-- Renderiza a lista se houver livros -->
      <ul v-if="books.length > 0" class="book-list">
        <li v-for="book in books" :key="book._id" class="livro-item">
          <div class="book-details">
            <!-- Exibe a capa do livro ou uma imagem padrão -->
            <img 
              :src="book.coverUrl || 'placeholder.jpg'" 
              alt="Capa do livro" 
              class="book-image" 
            />
            <!-- Exibe título, autor e ano do livro -->
            <span class="book-title">
              {{ book.title }} - {{ book.author }} ({{ book.year || 'Ano não informado' }})
            </span>
            <!-- Botões de ação -->
            <div class="book-actions">
              <button @click="editBook(book)" class="edit-btn">Editar</button>
              <button @click="deleteBook(book._id)" class="delete-btn">Excluir</button>
            </div>
          </div>
        </li>
      </ul>
      <!-- Mensagem exibida caso não haja livros -->
      <p v-else>Nenhum livro encontrado ou carregando...</p>
    </section>
  </div>
</template>

<script>
import api from '../services/api'; // Importa o serviço de API
import BookForm from './BookForm.vue'; // Importa o componente do formulário de livros

export default {
  components: {
    BookForm, // Declara o componente para uso local
  },
  data() {
    return {
      books: [], // Lista de livros obtidos do backend
      bookToEdit: null, // Livro selecionado para edição
    };
  },
  methods: {
    // Busca a lista de livros no backend
    fetchBooks() {
      api.getBooks()
        .then((response) => {
          this.books = response.data; // Armazena os livros no estado
        })
        .catch((error) => {
          console.error('Erro ao buscar livros:', error); // Loga erros no console
        });
    },
    // Exclui um livro pelo ID
    deleteBook(id) {
      api.deleteBook(id)
        .then(() => {
          this.fetchBooks(); // Atualiza a lista após exclusão
        })
        .catch((error) => {
          console.error('Erro ao excluir livro:', error); // Loga erros no console
        });
    },
    // Define o livro a ser editado
    editBook(book) {
      this.bookToEdit = book; // Passa o livro selecionado para o formulário
    },
  },
  mounted() {
    this.fetchBooks(); // Busca os livros assim que o componente é montado
  },
};
</script>

<style scoped>
/* Container principal */
.book-list-container {
  padding: 20px;
  background-color: #f9f9f9; /* Fundo claro */
}

/* Seção de livros */
.livros-section {
  padding: 20px;
  background-color: #ffffff; /* Fundo branco */
}

/* Lista de livros */
.book-list {
  list-style-type: none; /* Remove marcadores da lista */
  padding: 0;
}

/* Cada item da lista */
.livro-item {
  display: flex;
  justify-content: space-between; /* Espaça os elementos */
  align-items: center;
  margin-bottom: 15px; /* Espaçamento entre itens */
  padding: 10px;
  background-color: #fff;
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Sombra leve */
}

/* Detalhes do livro */
.book-details {
  display: flex;
  align-items: center;
  gap: 15px; /* Espaço entre a imagem e o texto */
}

/* Imagem do livro */
.book-image {
  width: 100px;
  height: 150px;
  object-fit: cover; /* Garante que a imagem preencha o espaço */
  border-radius: 8px;
}

/* Título e autor do livro */
.book-title {
  font-size: 1.2em;
  color: #333; /* Cor do texto */
  flex-grow: 1; /* Faz o título ocupar o espaço disponível */
}

/* Botões de ação */
.book-actions {
  display: flex;
  gap: 10px; /* Espaçamento entre os botões */
}

/* Botão de edição */
.edit-btn {
  padding: 8px 16px;
  background-color: #00aaff; /* Cor azul para edição */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Botão de exclusão */
.delete-btn {
  padding: 8px 16px;
  background-color: #ff4d4d; /* Cor vermelha para exclusão */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Efeito ao passar o mouse nos botões */
.edit-btn:hover,
.delete-btn:hover {
  opacity: 0.8; /* Reduz a opacidade para indicar interatividade */
}
</style>
