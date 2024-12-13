<template>
  <div class="book-list-container">
    <!-- Componente de formulário para adicionar ou editar livros -->
    <BookForm @book-added="fetchBooks" @book-updated="fetchBooks" :bookToEdit="bookToEdit" />

    <!-- Seção que exibe a lista de livros -->
    <section class="livros-section">
      <h2>Lista de Livros</h2>
      <ul class="book-list">
        <!-- Exibe os livros da lista com um item para cada livro -->
        <li v-for="book in books" :key="book._id" class="livro-item">
          <div class="book-details">
            <!-- Exibe a imagem do livro, se houver -->
            <img v-if="book.image" :src="book.image" alt="Capa do livro" class="book-image" />
            <!-- Exibe título, autor e descrição do livro -->
            <span class="book-title">{{ book.title }} - {{ book.author }} ({{ book.description }})</span>
            <div class="book-actions">
              <!-- Botão para editar o livro -->
              <button @click="editBook(book)" class="edit-btn">Editar</button>
              <!-- Botão para excluir o livro -->
              <button @click="deleteBook(book._id)" class="delete-btn">Excluir</button>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
// Importa o serviço API para interagir com o backend
import api from '../services/api';
// Importa o componente BookForm para adicionar ou editar livros
import BookForm from './BookForm.vue';

export default {
  // Registra o componente BookForm como um componente filho
  components: {
    BookForm,
  },
  data() {
    return {
      books: [], // Lista de livros a ser exibida
      bookToEdit: null, // Livro selecionado para edição
    };
  },
  methods: {
    // Função para buscar os livros da API
    fetchBooks() {
      api.getBooks().then((response) => {
        this.books = response.data; // Atualiza a lista de livros com os dados da resposta
      }).catch(err => {
        console.error("Erro ao buscar livros:", err); // Exibe erro no console em caso de falha
      });
    },
    // Função para excluir um livro
    deleteBook(id) {
      api.deleteBook(id).then(() => {
        this.fetchBooks(); // Atualiza a lista após exclusão
      }).catch(err => {
        console.error("Erro ao excluir livro:", err); // Exibe erro no console em caso de falha
      });
    },
    // Função para iniciar a edição de um livro
    editBook(book) {
      this.bookToEdit = { ...book }; // Cria uma cópia do livro para edição
    },
  },
  // A função fetchBooks é chamada ao montar o componente
  mounted() {
    this.fetchBooks();
  },
};
</script>

<style scoped>
/* Estilos gerais da lista de livros */

.book-list-container {
  padding: 20px;
  background-color: #f9f9f9; /* Cor de fundo da lista */
}

.livros-section {
  padding: 20px;
  background-color: #ffffff; /* Cor de fundo branca */
}

/* Estilo para a lista de livros */
.book-list {
  list-style-type: none; /* Remove os marcadores de lista */
  padding: 0; /* Remove o padding da lista */
}

/* Estilo para cada item da lista de livros */
.livro-item {
  display: flex;
  justify-content: space-between; /* Espaça o conteúdo entre a imagem e os botões */
  align-items: center;
  margin-bottom: 15px; /* Espaçamento entre os itens */
  padding: 10px;
  background-color: #fff; /* Fundo branco */
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

/* Estilo para os detalhes do livro */
.book-details {
  display: flex;
  align-items: center;
  gap: 15px; /* Espaçamento entre a imagem e os textos */
}

/* Estilo para a imagem do livro */
.book-image {
  width: 100px;
  height: 150px;
  object-fit: cover; /* Ajusta a imagem para cobrir o espaço sem deformar */
  border-radius: 8px; /* Bordas arredondadas para a imagem */
}

/* Estilo para o título, autor e descrição do livro */
.book-title {
  font-size: 1.2em;
  color: #333; /* Cor do texto */
  flex-grow: 1; /* Faz o título ocupar o máximo de espaço possível */
}

/* Estilo para os botões de ação */
.book-actions {
  display: flex;
  gap: 10px; /* Espaçamento entre os botões */
}

/* Estilo para o botão de edição */
.edit-btn,
.delete-btn {
  padding: 8px 16px;
  background-color: #007bff; /* Cor de fundo azul */
  color: #fff; /* Cor do texto */
  border: none;
  border-radius: 5px; /* Bordas arredondadas */
  cursor: pointer; /* Mostra um cursor de clique */
}

/* Estilo específico para o botão de edição */
.edit-btn {
  background-color: #00aaff; /* Cor diferente para o botão de editar */
}

/* Estilo específico para o botão de exclusão */
.delete-btn {
  background-color: #ff4d4d; /* Cor vermelha para excluir */
}

/* Efeito de hover para os botões */
.edit-btn:hover,
.delete-btn:hover {
  opacity: 0.8; /* Reduz a opacidade quando o botão é hover */
}
</style>
