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

    <!-- Livros para empréstimos -->
    <section class="livros-section">
      <h2>Livros para empréstimos</h2>
      <div class="livros-category">
        <h3>Para explorar</h3>
        <div class="livros">
          <div class="livro-item">
            <img src="capa-livro1.PNG" alt="Livro 1" />
            <p>Os sertões</p>
            <p class="status">Disponível para aluguel</p>
          </div>
          <div class="livro-item">
            <img src="capa-livro2.PNG" alt="Livro 2" />
            <p>A Divina Comédia</p>
            <p class="status">Disponível para aluguel</p>
          </div>
          <div class="livro-item">
            <img src="capa-livro3.PNG" alt="Livro 3" />
            <p>Contos de Lima Barreto</p>
            <p class="status">Disponível para aluguel</p>
          </div>
        </div> <!-- Fecha a div .livros -->
        <div class="view-more-btn">
          <router-link to="/explorar">Ver Mais</router-link>
        </div>
      </div> <!-- Fecha a div .livros-category -->

      <div class="livros-category">
        <h3>Lançamentos</h3>
        <div class="livros">
          <div class="livro-item">
            <img src="capa-livro4.PNG" alt="Livro 3" />
            <p>Livro do Desassossego</p>
            <p class="status">Alugado</p>
          </div>
          <div class="livro-item">
            <img src="capa-livro5.PNG" alt="Livro 4" />
            <p>Eu e Outras Poesias</p>
            <p class="status">Disponível para aluguel</p>
          </div>
          <div class="livro-item">
            <img src="capa-livro6.PNG" alt="Livro 2" />
            <p>O mercado de Veneza</p>
            <p class="status">Disponível para aluguel</p>
          </div>
        </div> <!-- Fecha a div .livros -->
        
        <div class="view-more-btn">
          <router-link to="/lancamentos">Ver Mais</router-link>
        </div>
      </div> <!-- Fecha a div .livros-category -->
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
    background: url('livraria.PNG') no-repeat center center;
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
    width: 30%;
    height: center;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
  
  .status {
    font-size: 0.9em;
    color: green;
  }
  
  .view-more-btn > a {
  /* Adicione o estilo do botão aqui */
  display: inline-block;
  padding: 10px 30px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  text-align: center;
}

  
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
    margin: 0 10px;
    text-decoration: none;
  }

  .social-media img{
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
  
  .livros-row {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
  
  .livro-item {
    flex: 1;
    margin: 0 50px;
    text-align: center;
  }
  </style>
  