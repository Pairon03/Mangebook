<template>
  <div class="form-container">
    <!-- Formulário para recuperar senha -->
    <form class="form" @submit.prevent="handleSubmit"> <!-- Impede o comportamento padrão de envio -->
      <p class="form-title">Recuperar Senha</p>

      <!-- Campo para o email -->
      <div class="input-container">
        <input
          type="email"
          v-model="email" <!-- Liga o valor do input à propriedade `email` -->
          placeholder="Coloque seu email cadastrado"
          required <!-- Torna o campo obrigatório -->
        />
        <span></span>
      </div>

      <!-- Botão para enviar o formulário -->
      <button type="submit" class="submit">Enviar</button>

      <!-- Link para redirecionar o usuário para a página de login -->
      <p class="signup-link">
        Lembrou sua senha?
        <router-link to="/login">Faça login</router-link> <!-- Link para a página de login -->
        <br />
        <!-- Logo da empresa -->
        <img src="logo.png" alt="Logo da Empresa" class="logo" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '', // Armazena o email fornecido pelo usuário
    };
  },
  methods: {
    handleSubmit() {
      // Simula o envio do email para recuperação de senha
      console.log('Email enviado para:', this.email); // Exibe o email no console (para depuração)
      // Aqui você pode adicionar a lógica para enviar uma requisição para o backend
    },
  },
};
</script>

<style scoped>
/* Estilos do formulário */
.form {
  background-color: #fff; /* Fundo branco */
  display: block;
  padding: 1rem; /* Espaçamento interno */
  max-width: 450px; /* Largura máxima do formulário */
  border-radius: 0.5rem; /* Bordas arredondadas */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Sombra leve */
  margin: 0 auto; /* Centraliza horizontalmente */
}

/* Centraliza o formulário na tela */
.form-container {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  min-height: 100vh; /* Garante que ocupe toda a altura da tela */
  margin: 0;
  background-color: #f3f4f6; /* Cor de fundo clara */
}

/* Título do formulário */
.form-title {
  font-size: 1.25rem; /* Tamanho da fonte */
  line-height: 1.75rem; /* Espaçamento entre as linhas */
  font-weight: 600; /* Peso da fonte */
  text-align: center; /* Alinha o texto ao centro */
  color: #000; /* Cor do texto */
}

/* Estilo dos campos de entrada */
.input-container input {
  background-color: #fff; /* Fundo branco */
  padding: 1rem; /* Espaçamento interno */
  padding-right: 3rem; /* Espaçamento à direita (para ícones, se necessário) */
  font-size: 0.875rem; /* Tamanho da fonte */
  line-height: 1.25rem; /* Espaçamento entre as linhas */
  width: 300px; /* Largura do campo de entrada */
  border-radius: 0.5rem; /* Bordas arredondadas */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* Sombra suave */
  border: 1px solid #e5e7eb; /* Cor da borda */
  margin: 8px 0; /* Espaçamento entre os campos */
}

/* Botão de submissão */
.submit {
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #4f46e5; /* Cor do fundo */
  color: #ffffff; /* Cor do texto */
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%; /* Ocupa toda a largura */
  border-radius: 0.5rem; /* Bordas arredondadas */
  text-transform: uppercase; /* Transforma o texto para maiúsculo */
  cursor: pointer; /* Cursor de clique */
}

/* Link de redirecionamento para login */
.signup-link {
  color: #6b7280; /* Cor do texto do link */
  font-size: 0.875rem; /* Tamanho da fonte */
  line-height: 1.25rem; /* Espaçamento entre as linhas */
  text-align: center; /* Centraliza o texto */
}

/* Estilo para o link */
.signup-link a {
  text-decoration: underline; /* Sublinhado no link */
}
</style>
