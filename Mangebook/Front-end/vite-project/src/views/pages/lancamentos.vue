<template>
  <div class="page-container">
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
            v-model="searchTerm" <!-- Liga o valor do campo de busca à variável `searchTerm` -->
            placeholder="Pesquisar Mangebook.com.br"
          />
          <button class="search-btn" @click="search">Pesquisar</button> <!-- Chama a função de pesquisa -->
        </div>

        <!-- Área de usuário -->
        <div class="user-area">
          <p>Olá, seja bem-vindo!</p>
          <!-- Links para login e cadastro -->
          <router-link to="/login"><button class="login-btn">Entrar</button></router-link>
          <router-link to="/cadastro"><button class="register-btn">Cadastrar</button></router-link>
        </div>
      </nav>
    </header>

    <!-- Livros Lançamentos -->
    <section class="livros-section">
      <h2>Lançamentos</h2>
      <div class="livros-category">
        <h3>Novidades para você</h3>
        <div class="livros">
          <!-- Exibe livros divididos em linhas -->
          <div v-for="(row, index) in livrosRows" :key="index" class="livros-row">
            <div
              v-for="livro in row"
              :key="livro.id"
              class="livro-item" <!-- Exibe cada livro individualmente -->
            >
              <img :src="livro.image" :alt="livro.title" /> <!-- Exibe a imagem do livro -->
              <p>{{ livro.title }}</p> <!-- Exibe o título do livro -->
              <p class="status">{{ livro.status }}</p> <!-- Exibe o status do livro -->
            </div>
          </div>
        </div>
      </div>
      <!-- Link para voltar -->
      <router-link to="/"><button class="back-btn">Voltar</button></router-link>
    </section>

    <!-- Rodapé -->
    <footer>
      <!-- Links para redes sociais -->
      <div class="social-media">
        <img src="../../assets/Instagram.png" alt="Instagram" />
        <img src="../../assets/Facebook.png" alt="Facebook" />
        <br />
        <a href="#" class="instagram-link">Instagram</a>
        <a href="#" class="facebook-link">Facebook</a>
      </div>

      <!-- Logo no rodapé -->
      <div class="footer-logo">
        <img src="../../assets/logofooter.png" alt="Logo Mangebook" />
        <p>Mangebook - Livraria Digital</p>
      </div>
    </footer>
  </div>
</template>

<script>
// Importação do serviço API para buscar livros
import api from '@/services/api.js'; 

export default {
  data() {
    return {
      searchTerm: '', // Variável que armazena o termo de pesquisa
      livros: [], // Lista de livros recebidos da API
      livrosRows: [] // Livros organizados em linhas
    };
  },
  methods: {
    // Função para buscar livros na API
    async fetchLivros() {
      try {
        const response = await api.getBooks(); // Chama a API para obter os livros
        this.livros = response.data; // Armazena os livros recebidos
        this.organizeLivros(); // Organiza os livros em linhas
      } catch (error) {
        console.error('Erro ao buscar os livros:', error); // Exibe erros no console, caso haja falhas na requisição
      }
    },
    // Organiza os livros em linhas, com 3 livros por linha
    organizeLivros() {
      const rows = [];
      for (let i = 0; i < this.livros.length; i += 3) {
        rows.push(this.livros.slice(i, i + 3)); // Adiciona os livros às linhas
      }
      this.livrosRows = rows; // Atualiza o estado com as linhas organizadas
    },
    // Função de pesquisa que filtra os livros conforme o termo de busca
    search() {
      console.log("Termo de pesquisa:", this.searchTerm); // Exibe o termo de pesquisa no console
      this.livrosRows = this.livros
        .filter((livro) => livro.title.toLowerCase().includes(this.searchTerm.toLowerCase())) // Filtra livros com base no título
        .reduce((rows, livro, index) => {
          if (index % 3 === 0) rows.push([]); // Cria novas linhas de 3 livros
          rows[rows.length - 1].push(livro);
          return rows;
        }, []); // Reduz a lista de livros para as linhas
    }
  },
  mounted() {
    this.fetchLivros(); // Chama a função de buscar livros ao montar o componente
  }
};
</script>

<style scoped>
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Playfair Display', serif;
  color: #333;
}

/* Cabeçalho com imagem de fundo desfocada */
header {
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../../assets/livraria.PNG') no-repeat center center;
  background-size: cover;
  filter: blur(3px); /* Aplica o desfoque na imagem de fundo */
  z-index: -1; /* Mantém a imagem de fundo atrás dos outros elementos */
}

/* Navbar */
.navbar {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo img {
  height: 100px;
}

/* Caixa de pesquisa */
.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  padding: 5px;
}

.search-container input {
  padding: 8px;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 5px 0 0 5px;
  width: 300px;
}

.search-btn {
  background-color: #00aaff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

/* Área de usuário */
.user-area {
  display: flex;
  align-items: center;
  color: #fff;
}

.user-area p {
  margin-right: 10px;
}

/* Botões de login e cadastro */
.login-btn, .register-btn {
  background-color: #fff;
  color: #0066cc;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;
}

/* Seção de livros */
.livros-section {
  padding: 20px;
  background-color: #f9f9f9;
}

.livros-category {
  margin-bottom: 20px;
  text-align: center;
}

.livros-category h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
}

.livros {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.livro-item {
  width: 150px;
  text-align: center;
}

.livro-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

.status {
  font-size: 0.9em;
  color: green;
}

/* Rodapé */
footer {
  background-color: #0f1111;
  color: #fff;
  text-align: center;
  padding: 20px;
  margin-top: 20px;
}

.social-media img {
  height: 100px;
  margin-top: 10px;
}

.footer-logo img {
  height: 100px;
  margin-top: 10px;
}

.footer-logo p {
  margin-top: 5px;
  color: #b3b3b3;
}

footer a {
  color: #00aaff;
  text-decoration: none;
}
</style>
