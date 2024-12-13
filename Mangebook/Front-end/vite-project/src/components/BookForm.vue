<template>
  <!-- Formulário para adicionar ou atualizar livros -->
  <form @submit.prevent="handleSubmit"> <!-- Previne o comportamento padrão de submit -->
    <!-- Campo para o título do livro -->
    <input v-model="book.title" placeholder="Título" required />
    
    <!-- Campo para o autor do livro -->
    <input v-model="book.author" placeholder="Autor" required />
    
    <!-- Campo de descrição do livro -->
    <textarea v-model="book.description" placeholder="Descrição"></textarea>
    
    <!-- Campo para upload de imagem -->
    <input type="file" @change="handleFileUpload" accept="image/*" />
    
    <!-- Botão de submit, alterando o texto conforme a ação (Adicionar ou Atualizar) -->
    <button type="submit">{{ book._id ? 'Atualizar' : 'Adicionar' }}</button>
  </form>
</template>

<script>
// Importa o serviço API para interagir com o backend
import api from '../services/api';

export default {
  // Define as propriedades que o componente pode receber
  props: ['bookToEdit'],
  
  data() {
    return {
      // Define o estado inicial do livro. Se `bookToEdit` for fornecido, ele será usado para editar o livro
      book: this.bookToEdit || { title: '', author: '', description: '', image: null },
      selectedFile: null, // Armazena o arquivo selecionado para upload
    };
  },
  
  // Observa mudanças no `bookToEdit` e atualiza os dados do livro
  watch: {
    bookToEdit: {
      immediate: true, // Executa imediatamente ao montar o componente
      handler(newVal) {
        // Atualiza `book` quando `bookToEdit` mudar
        this.book = newVal || { title: '', author: '', description: '', image: null };
      },
    },
  },
  
  methods: {
    // Método para lidar com o upload do arquivo de imagem
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0]; // Salva o arquivo selecionado
    },

    // Método que trata o envio do formulário
    handleSubmit() {
      if (this.book._id) {
        // Se o livro já possui `_id`, significa que é uma atualização
        api.updateBook(this.book._id, this.book).then(() => {
          this.$emit('book-updated'); // Emite um evento de que o livro foi atualizado
          this.resetForm(); // Limpa o formulário
        });
      } else {
        // Caso contrário, é uma adição de novo livro
        api.addBook(this.book).then(() => {
          this.$emit('book-added'); // Emite um evento de que o livro foi adicionado
          this.resetForm(); // Limpa o formulário
        });
      }
    },

    // Método para resetar o formulário
    resetForm() {
      this.book = { title: '', author: '', year: null, image: '' }; // Limpa os campos do livro
    },
  },
};
</script>

<style scoped>
/* Estilos básicos do formulário */
form {
  display: flex;
  flex-direction: column; /* Organiza os itens em uma coluna */
  gap: 10px; /* Espaçamento entre os itens */
  padding: 20px;
  background-color: #fff; /* Cor de fundo branca */
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

/* Estilos para os campos de input */
input, textarea {
  padding: 10px;
  border: 1px solid #ddd; /* Borda cinza clara */
  border-radius: 5px; /* Bordas arredondadas */
  font-size: 16px; /* Tamanho da fonte */
}

/* Estilos para o botão de submit */
button {
  padding: 10px;
  background-color: #007bff; /* Cor de fundo azul */
  color: #fff; /* Cor do texto branco */
  border: none;
  border-radius: 5px; /* Bordas arredondadas */
  cursor: pointer; /* Cursor de clique */
  font-size: 16px; /* Tamanho da fonte */
}

/* Efeito de hover no botão */
button:hover {
  background-color: #0056b3; /* Cor de fundo mais escura no hover */
}
</style>
