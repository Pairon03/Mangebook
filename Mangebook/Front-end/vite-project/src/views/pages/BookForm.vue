<template>
  <!-- Formulário para adicionar ou editar um livro -->
  <form @submit.prevent="handleSubmit"> <!-- Impede o comportamento padrão de recarregar a página -->
    <input v-model="book.title" placeholder="Título" required /> <!-- Campo para o título -->
    <input v-model="book.author" placeholder="Autor" required /> <!-- Campo para o autor -->
    <input v-model="book.year" placeholder="Ano" required /> <!-- Campo para o ano -->
    <input v-model="book.coverUrl" placeholder="URL da Imagem" /> <!-- Campo para a URL da capa -->
    <button type="submit">{{ book.id ? 'Atualizar' : 'Adicionar' }}</button> <!-- Botão dinâmico -->
  </form>
</template>

<script>
import api from '../../services/api'; // Importa o serviço API para interagir com o backend

export default {
  props: ['bookToEdit'], // Recebe um livro para edição como propriedade
  data() {
    return {
      // Inicializa o objeto `book` com o livro a ser editado ou valores vazios para criação
      book: this.bookToEdit || { title: '', author: '', year: null, coverUrl: '' },
    };
  },
  watch: {
    // Observa mudanças no livro a ser editado (prop `bookToEdit`) para atualizar o estado local
    bookToEdit: {
      immediate: true, // Garante que o handler seja chamado na inicialização
      handler(newVal) {
        // Atualiza o estado local do livro ou redefine os valores padrão
        this.book = newVal || { title: '', author: '', year: null, coverUrl: '' };
      },
    },
  },
  methods: {
    handleSubmit() {
      if (this.book.id) {
        // Atualiza um livro existente no backend
        api.updateBook(this.book.id, this.book).then(() => {
          this.$emit('book-updated'); // Emite um evento para notificar o componente pai
          this.resetForm(); // Reseta o formulário
        });
      } else {
        // Adiciona um novo livro no backend
        api.addBook(this.book).then(() => {
          this.$emit('book-added'); // Emite um evento para notificar o componente pai
          this.resetForm(); // Reseta o formulário
        });
      }
    },
    resetForm() {
      // Redefine os campos do formulário para os valores iniciais
      this.book = { title: '', author: '', year: null, coverUrl: '' };
    },
  },
};
</script>

<style scoped>
/* Estilo básico do formulário */
form {
  display: flex;
  flex-direction: column; /* Coloca os elementos em uma coluna */
  gap: 10px; /* Espaçamento entre os campos */
  padding: 20px; /* Espaçamento interno */
  background-color: #fff; /* Fundo branco */
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Sombra leve */
}

input {
  padding: 10px; /* Espaçamento interno */
  border: 1px solid #ddd; /* Borda leve */
  border-radius: 5px; /* Bordas arredondadas */
  font-size: 16px; /* Tamanho da fonte */
}

button {
  padding: 10px; /* Espaçamento interno */
  background-color: #007bff; /* Cor do botão */
  color: #fff; /* Cor do texto */
  border: none; /* Remove bordas */
  border-radius: 5px; /* Bordas arredondadas */
  cursor: pointer; /* Mostra o cursor de clique */
  font-size: 16px; /* Tamanho da fonte */
}

button:hover {
  background-color: #0056b3; /* Cor mais escura ao passar o mouse */
}
</style>
