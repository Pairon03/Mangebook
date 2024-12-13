<template>
  <div class="login-container">
    <!-- Formulário de login -->
    <form @submit.prevent="handleSubmit" class="form">
      <p class="form-title">Faça login na sua conta</p>

      <!-- Campo de email -->
      <div class="input-container">
        <input 
          type="email" 
          v-model="email" <!-- Vincula o valor do campo de email à variável `email` -->
          placeholder="Coloque o email" 
          required 
        />
        <span></span>
      </div>

      <!-- Campo de senha -->
      <div class="input-container">
        <input 
          type="password" 
          v-model="password" <!-- Vincula o valor do campo de senha à variável `password` -->
          placeholder="Coloque a senha" 
          required 
        />
      </div>

      <!-- Botão de submissão -->
      <button type="submit" class="submit">Entrar</button>

      <!-- Link para inscrição caso o usuário não tenha uma conta -->
      <p class="signup-link">
        Sem uma conta?
        <router-link to="/cadastro">Inscreva-se</router-link> <!-- Redireciona para a página de cadastro -->
        <br />
        <img src="logo.png" alt="Logo da Empresa" class="logo" />
      </p>

      <!-- Link para recuperação de senha -->
      <p class="forgot-password">
        <router-link to="/esqueceuasenha">Esqueceu sua senha?</router-link>
      </p>

      <!-- Link para acesso do administrador -->
      <p class="admin-access">
        <router-link to="/loginadm">Acesso Administrador</router-link>
      </p>

      <!-- Link para voltar à página principal -->
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
      email: '',  // Variável que armazena o email
      password: '' // Variável que armazena a senha
    };
  },
  methods: {
    handleSubmit() {
      // Lógica de login (a ser implementada)
      console.log('Email:', this.email); // Exibe o email no console
      console.log('Password:', this.password); // Exibe a senha no console
    }
  }
};
</script>

<style scoped>
/* Estilos do formulário */
.form {
  background-color: #fff;
  display: block;
  padding: 1rem;
  max-width: 450px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  margin: 0 auto; /* Centraliza o formulário */
}

/* Centralização da página */
.login-container {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  min-height: 100vh; /* Garante que ocupe toda a altura da tela */
  background-color: #f3f4f6;
}

/* Título do formulário */
.form-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-align: center;
  color: #000;
}

/* Estilos para os campos de entrada */
.input-container {
  position: relative;
}

.input-container input,
.form button {
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
}

.input-container input {
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

/* Botão de login */
.submit {
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #4F46E5; /* Cor de fundo */
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase; /* Texto em maiúsculas */
}

/* Link para cadastro */
.signup-link {
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.signup-link a {
  text-decoration: underline;
}

/* Link para recuperação de senha */
.forgot-password {
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

/* Link para o acesso de administrador */
.admin-access {
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  margin-top: 15px;
}

.admin-access a {
  text-decoration: underline;
  color: #4F46E5;
}
</style>
