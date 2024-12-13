<template>
  <div class="home-container">
    <!-- Cabeçalho do painel -->
    <header class="home-header">
      <h1>Painel do Administrador</h1>

      <!-- Botão para sair (redireciona para a página de login do administrador) -->
      <div class="home-actions">
        <router-link to="/loginadm" class="btn">Sair</router-link>
      </div>
    </header>

    <!-- Componente que exibe a lista de livros -->
    <BookList />
  </div>
</template>

<script>
// Importa o componente BookList, que provavelmente exibe e gerencia a lista de livros
import BookList from '@/components/BookList.vue';

export default {
  components: {
    BookList, // Declaração do componente para ser usado localmente
  },
};
</script>

<style scoped>
/* Estilos para o container principal do painel */
.home-container {
  padding: 20px;
  background-color: #f9f9f9; /* Fundo claro */
}

/* Estilos para o cabeçalho do painel */
.home-header {
  display: flex; /* Layout flexível */
  justify-content: space-between; /* Espaça os itens entre as extremidades */
  align-items: center; /* Alinha verticalmente os itens */
  margin-bottom: 20px; /* Espaçamento inferior */
}

/* Estilos para o botão de saída */
.btn {
  display: inline-block; /* Botão com exibição inline */
  padding: 10px 15px; /* Espaçamento interno */
  background-color: #4F46E5; /* Cor de fundo azul */
  color: #fff; /* Texto branco */
  text-decoration: none; /* Remove sublinhado */
  border-radius: 5px; /* Bordas arredondadas */
  font-weight: bold; /* Texto em negrito */
  font-size: 14px; /* Tamanho da fonte */
  text-align: center; /* Centraliza o texto */
}

/* Efeito de hover no botão */
.btn:hover {
  background-color: #3730a3; /* Cor mais escura no hover */
}
</style>
