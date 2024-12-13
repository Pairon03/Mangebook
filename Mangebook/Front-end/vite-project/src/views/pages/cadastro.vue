<template>
  <div class="form-container">
    <!-- Formulário de cadastro -->
    <form class="form" @submit.prevent="handleSubmit"> <!-- Impede o comportamento padrão de envio -->
      <p class="form-title">Cadastre-se</p>

      <!-- Campo para o nome -->
      <div class="input-container">
        <input
          type="text"
          v-model="nome" <!-- Liga o valor do input à propriedade `nome` -->
          placeholder="Coloque seu nome"
          required <!-- Torna o campo obrigatório -->
        />
      </div>

      <!-- Campo para o email -->
      <div class="input-container">
        <input
          type="email"
          v-model="email" <!-- Liga o valor do input à propriedade `email` -->
          placeholder="Coloque seu email"
          required <!-- Torna o campo obrigatório -->
        />
      </div>

      <!-- Campo para a idade -->
      <div class="input-container">
        <input
          type="number"
          v-model="idade" <!-- Liga o valor do input à propriedade `idade` -->
          placeholder="Coloque sua idade"
          required <!-- Torna o campo obrigatório -->
        />
      </div>

      <!-- Campo de seleção para sexualidade -->
      <div class="input-container">
        <select v-model="sexualidade" required> <!-- Liga a seleção à propriedade `sexualidade` -->
          <option value="" disabled selected>Selecione sua sexualidade</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="nao-binario">Não-binário</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <!-- Botão de submissão -->
      <button type="submit" class="submit">Cadastrar</button>

      <!-- Link para a página de login -->
      <p class="signup-link">
        Já tem uma conta?
        <router-link to="/login">Faça login</router-link>
        <br />
        <!-- Exibe o logo -->
        <img src="logo.png" alt="Logo da Empresa" class="logo" />
      </p>

      <!-- Link para voltar à página inicial -->
      <p class="voltar">
        <router-link to="/">Voltar</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: '', // Nome do usuário
      email: '', // Email do usuário
      idade: null, // Idade do usuário
      sexualidade: '', // Identidade de gênero do usuário
    };
  },
  methods: {
    handleSubmit() {
      // Cria um objeto com os dados do formulário
      const userData = {
        nome: this.nome,
        email: this.email,
        idade: this.idade,
        sexualidade: this.sexualidade,
      };
      
      // Exibe os dados no console para fins de depuração
      console.log('Usuário cadastrado:', userData);
      
      // Implementação para enviar os dados para uma API pode ser adicionada aqui
    },
  },
};
</script>

<style scoped>
/* Container principal */
.form-container {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  min-height: 100vh; /* Altura mínima da tela */
  background-color: #f3f4f6; /* Fundo claro */
}

/* Estilo do formulário */
.form {
  background-color: #fff; /* Fundo branco */
  display: block;
  padding: 1rem; /* Espaçamento interno */
  max-width: 450px; /* Largura máxima */
  border-radius: 0.5rem; /* Bordas arredondadas */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Sombra leve */
  margin: 0 auto; /* Centraliza horizontalmente */
}

/* Título do formulário */
.form-title {
  font-size: 1.25rem; /* Tamanho da fonte */
  font-weight: 600; /* Peso da fonte */
  text-align: center; /* Centralizado */
  color: #000; /* Cor do texto */
}

/* Estilo dos campos de entrada */
.input-container input,
.input-container select {
  width: 100%;
  padding: 1rem; /* Espaçamento interno */
  margin: 8px 0; /* Espaçamento externo */
  font-size: 0.875rem; /* Tamanho da fonte */
  border: 1px solid #e5e7eb; /* Borda leve */
  border-radius: 0.5rem; /* Bordas arredondadas */
  background-color: #fff; /* Fundo branco */
}

/* Botão de submissão */
.submit {
  display: block;
  padding: 0.75rem;
  background-color: #4f46e5; /* Fundo azul */
  color: #fff; /* Texto branco */
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase; /* Texto em maiúsculas */
  width: 100%; /* Ocupa toda a largura */
  border-radius: 0.5rem;
  cursor: pointer; /* Cursor de clique */
}

/* Links */
.signup-link, .voltar {
  text-align: center;
  margin-top: 1rem;
}

.signup-link a, .voltar a {
  text-decoration: underline; /* Sublinhado */
}
</style>
