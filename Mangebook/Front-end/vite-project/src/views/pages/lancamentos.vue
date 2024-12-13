<template>
  <div class="page-container">
    <!-- Navbar -->
    <header>
      <nav class="navbar">
        <div class="logo">
          <img src="logo.png" alt="Logo Mangebook" />
        </div>
        <div class="search-container">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Pesquisar Mangebook.com.br"
          />
          <button class="search-btn" @click="search">Pesquisar</button>
        </div>
        <div class="user-area">
          <p>Olá, seja bem-vindo!</p>
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
          <div v-for="(row, index) in livrosRows" :key="index" class="livros-row">
            <div
              v-for="livro in row"
              :key="livro.id"
              class="livro-item"
            >
              <img :src="livro.image" :alt="livro.title" />
              <p>{{ livro.title }}</p>
              <p class="status">{{ livro.status }}</p>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/"><button class="back-btn">Voltar</button></router-link>
    </section>

    <!-- Rodapé -->
    <footer>
      <div class="social-media">
        <img src="../../assets/Instagram.png" alt="Instagram" />
        <img src="../../assets/Facebook.png" alt="Facebook" />
        <br />
        <a href="#" class="instagram-link">Instagram</a>
        <a href="#" class="facebook-link">Facebook</a>
      </div>
      <div class="footer-logo">
        <img src="../../assets/logofooter.png" alt="Logo Mangebook" />
        <p>Mangebook - Livraria Digital</p>
      </div>
    </footer>
  </div>
</template>

<script>
import api from '@/services/api.js'; // Serviço para interagir com a API

export default {
  data() {
    return {
      searchTerm: '',
      livros: [], // Lista de livros obtida da API
      livrosRows: [] // Livros organizados em linhas
    };
  },
  methods: {
    async fetchLivros() {
      try {
        const response = await api.getBooks(); // Chamada para a API
        this.livros = response.data; // Atualiza os livros com os dados recebidos
        this.organizeLivros(); // Organiza os livros em linhas para o grid
      } catch (error) {
        console.error('Erro ao buscar os livros:', error);
      }
    },
    organizeLivros() {
      // Divide os livros em linhas de até 3 itens (pode ajustar conforme o layout)
      const rows = [];
      for (let i = 0; i < this.livros.length; i += 3) {
        rows.push(this.livros.slice(i, i + 3));
      }
      this.livrosRows = rows;
    },
    search() {
      // Implementação de lógica de pesquisa
      console.log("Termo de pesquisa:", this.searchTerm);
      // Filtra os livros conforme o termo de pesquisa
      this.livrosRows = this.livros
        .filter((livro) => livro.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
        .reduce((rows, livro, index) => {
          if (index % 3 === 0) rows.push([]);
          rows[rows.length - 1].push(livro);
          return rows;
        }, []);
    }
  },
  mounted() {
    this.fetchLivros(); // Busca os livros ao montar o componente
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
  filter: blur(3px);
  z-index: -1;
}

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

/* Caixa de busca */
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
  height
: 100px;
    margin-top: 10px;
  }
  
  .footer-logo p {
    margin-top: 5px;
    color: #b3b3b3;
  }
  </style>
  