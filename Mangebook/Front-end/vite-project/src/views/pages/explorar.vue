<template>
  <div>
    <!-- Navbar -->
    <header>
      <nav class="navbar">
        <!-- Logo -->
        <div class="logo">
          <img src="logo.png" alt="Logo Mangebook" />
        </div>

        <!-- Caixa de pesquisa -->
        <div class="search-container">
          <input 
            type="text" 
            placeholder="Pesquisar Mangebook.com.br" 
            v-model="searchQuery" <!-- Liga o valor da pesquisa à variável `searchQuery` -->
          />
          <button class="search-btn" @click="searchBooks">Pesquisar</button>
        </div>

        <!-- Área do usuário -->
        <div class="user-area">
          <p>Olá, seja bem-vindo!</p>
          <router-link to="/login">
            <button class="login-btn">Entrar</button>
          </router-link>
          <router-link to="/cadastro">
            <button class="register-btn">Cadastrar</button>
          </router-link>
        </div>
      </nav>
    </header>

    <!-- Livros para exploração -->
    <section class="livros-section">
      <h2>Livros para exploração</h2>

      <!-- Categoria de livros -->
      <div class="livros-category">
        <h3>Para explorar</h3>
        <div class="livros">
          <!-- Divide os livros em linhas -->
          <div class="livros-row" v-for="(row, index) in bookRows" :key="index">
            <!-- Exibe cada livro da linha -->
            <div class="livro-item" v-for="(book, bookIndex) in row" :key="bookIndex">
              <img :src="book.cover" :alt="book.title" />
              <p>{{ book.title }}</p>
              <p class="status">{{ book.status }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Botão para voltar -->
      <div class="back-btn">
        <router-link to="/">Voltar</router-link>
      </div>
    </section>

    <!-- Rodapé -->
    <footer>
      <!-- Links para redes sociais -->
      <div class="social-media">
        <img src="Instagram.png" alt="Instagram" />
        <img src="Facebook.png" alt="Facebook" />
        <br />
        <a href="#" class="instagram-link">Instagram</a>
        <a href="#" class="facebook-link">Facebook</a>
      </div>

      <!-- Logo e descrição no rodapé -->
      <div class="footer-logo">
        <img src="logofooter.PNG" alt="Logo Mangebook" />
        <p>Mangebook - Livraria Digital</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '', // Texto da pesquisa
      books: [
        // Array de objetos contendo informações sobre os livros
        { title: 'Os sertões', cover: 'capa-livro1.PNG', status: 'Disponível para aluguel' },
        { title: 'A Divina Comédia', cover: 'capa-livro2.PNG', status: 'Disponível para aluguel' },
        { title: 'Contos de Lima Barreto', cover: 'capa-livro3.PNG', status: 'Alugado' },
        { title: 'A Ilustre Casa de Ramires', cover: 'capa-livro7.PNG', status: 'Disponível para aluguel' },
        { title: 'Charneca em Flor', cover: 'capa-livro8.PNG', status: 'Disponível para aluguel' },
        { title: 'Dom Casmurro', cover: 'capa-livro9.PNG', status: 'Disponível para aluguel' },
        { title: 'Viagens de Gulliver', cover: 'capa-livro10.PNG', status: 'Alugado' },
        { title: 'Alma Inquieta', cover: 'capa-livro11.PNG', status: 'Disponível para aluguel' },
        { title: 'Dom Quixote', cover: 'capa-livro12.PNG', status: 'Disponível para aluguel' },
        { title: 'Foco Roubado', cover: 'capa-livro13.PNG', status: 'Alugado' },
      ],
    };
  },
  computed: {
    // Divide os livros em linhas de 5 itens
    bookRows() {
      const rows = [];
      for (let i = 0; i < this.books.length; i += 5) {
        rows.push(this.books.slice(i, i + 5));
      }
      return rows;
    },
  },
  methods: {
    // Lógica de pesquisa (não implementada completamente)
    searchBooks() {
      console.log('Buscando por:', this.searchQuery);
    },
  },
};
</script>

<style scoped>
/* Estilo básico e responsivo */

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Playfair Display', serif;
  color: #333;
}

/* Header com imagem desfocada */
header {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

header::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('livraria.PNG') no-repeat center;
  background-size: cover;
  filter: blur(3px);
  z-index: -1;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
}

/* Caixa de busca */
.search-container input {
  padding: 8px;
  border-radius: 5px 0 0 5px;
  border: none;
}

.search-btn {
  padding: 8px 16px;
  border-radius: 0 5px 5px 0;
  background-color: #00aaff;
  color: white;
  cursor: pointer;
}

/* Livros */
.livros-row {
  display: flex;
  margin: 20px 0;
}

.livro-item {
  text-align: center;
}

.livro-item img {
  width: 50%;
  border-radius: 8px;
}

/* Rodapé */
footer {
  text-align: center;
  background-color: #0f1111;
  color: white;
  padding: 20px;
}

footer a {
  color: #00aaff;
}
</style>
