<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="book.title" placeholder="Título" required />
    <input v-model="book.author" placeholder="Autor" required />
    <textarea v-model="book.description" placeholder="Descrição"></textarea>
    <input type="file" @change="handleFileUpload" accept="image/*" />
    <button type="submit">{{ book._id ? 'Atualizar' : 'Adicionar' }}</button>
  </form>
</template>

<script>
import api from '../services/api';

export default {
  props: ['bookToEdit'],
  data() {
    return {
      book: this.bookToEdit || { title: '', author: '', description: '', image: null },
      selectedFile: null,
    };
  },
  watch: {
    bookToEdit: {
      immediate: true,
      handler(newVal) {
        this.book = newVal || { title: '', author: '', description: '', image: null };
      },
    },
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    handleSubmit() {
  if (this.book._id) {
    api.updateBook(this.book._id, this.book).then(() => {
      this.$emit('book-updated');
      this.resetForm();
    });
  } else {
    api.addBook(this.book).then(() => {
      this.$emit('book-added');
      this.resetForm();
    });
  }
},
resetForm() {
  this.book = { title: '', author: '', year: null, image: '' }; // Limpa o formulário
},

  },
};
</script>

<style scoped>
/* Estilos básicos do formulário */
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>
