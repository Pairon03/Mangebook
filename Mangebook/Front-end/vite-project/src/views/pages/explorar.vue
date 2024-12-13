<template>
    <div>
   <!-- Navbar -->
   <header>
      <nav class="navbar">
        <div class="logo">
          <img src="logo.png" alt="Logo Mangebook" />
        </div>
        <div class="search-container">
          <input type="text" placeholder="Pesquisar Mangebook.com.br" />
          <button class="search-btn">Pesquisar</button>
        </div>
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
        <div class="livros-category">
          <h3>Para explorar</h3>
          <div class="livros">
            <div class="livros-row" v-for="(row, index) in bookRows" :key="index">
              <div class="livro-item" v-for="(book, bookIndex) in row" :key="bookIndex">
                <img :src="book.cover" :alt="book.title" />
                <p>{{ book.title }}</p>
                <p class="status">{{ book.status }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="back-btn">
          <router-link to="/">Voltar</router-link>
        </div>
      </section>
  
      <!-- Rodapé -->
      <footer>
        <div class="social-media">
          <img src="Instagram.png" alt="Instagram" />
          <img src="Facebook.png" alt="Facebook" />
          <br />
          <a href="#" class="instagram-link">Instagram</a>
          <a href="#" class="facebook-link">Facebook</a>
        </div>
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
        searchQuery: '',
        books: [
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
      bookRows() {
        const rows = [];
        for (let i = 0; i < this.books.length; i += 5) {
          rows.push(this.books.slice(i, i + 5));
        }
        return rows;
      },
    },
    methods: {
      searchBooks() {
        // Lógica de pesquisa a ser implementada
        console.log('Buscando por:', this.searchQuery);
      },
    },
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
    font-family: 'Playfair Display', serif; /* Altere a fonte aqui */
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
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('livraria.PNG') no-repeat center center;
    background-size: cover;
    filter: blur(3px); /* Aplica o desfoque apenas na imagem de fundo */
    z-index: -1; /* Mantém a imagem atrás do conteúdo */
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
  
  /* Logo no cabeçalho */
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
  
  .login-btn,
  .register-btn {
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
  
  .livros-row {
    display: flex;
    justify-content: space-between;
    margin: 20px 0; /* Adiciona um espaço entre as linhas */
  }
  
  .livro-item {
    flex: 3; /* Faz os livros ocuparem o mesmo espaço */
    margin: 0 10px; /* Espaçamento lateral entre os itens */
    text-align: center; /* Centraliza o texto */
  }
  
  .livro-item img {
    width: 50%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
  
  .status {
    font-size: 0.9em;
    color: green;
  }
  
  .back-btn {
    margin-top: 20px;
  }
  
  /* Rodapé sem espaço abaixo */
  footer {
    background-color: #0f1111;
    color: #fff;
    text-align: center;
    padding: 20px;
    margin-top: 20px;
  }
  
  .social-media {
    margin-bottom: 10px;
  }
  
  .social-media a {
    color: #00aaff;
    margin: 0 20px;
    text-decoration: none;
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
  
  /* Remove o espaço em branco abaixo do footer */
  html,
  body {
    height: 100%;
  }
  
  body {
    display: flex;
    flex-direction: column;
  }
  
  footer {
    margin-top: auto;
  }
  </style>
  