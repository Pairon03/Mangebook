<template>
    <div class="login-container">
      <form @submit.prevent="handleSubmit" class="form">
        <p class="form-title">Faça login na sua conta</p>
        <div class="input-container">
          <input 
            type="email" 
            v-model="email" 
            placeholder="Coloque o email" 
            required 
          />
          <span></span>
        </div>
        <div class="input-container">
          <input 
            type="password" 
            v-model="password" 
            placeholder="Coloque a senha" 
            required 
          />
        </div>
        <button type="submit" class="submit">Entrar</button>
        <p class="signup-link">
          Sem uma conta?
          <router-link to="/cadastro">Inscreva-se</router-link>
          <br>
          <img src="logo.png" alt="Logo da Empresa" class="logo" />
        </p>
        <p class="forgot-password">
          <router-link to="/esqueceuasenha">Esqueceu sua senha?</router-link>
        </p>
        <p class="admin-access">
        <router-link to="/loginadm">Acesso Administrador</router-link>
      </p>
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
        email: '',
        password: ''
      };
    },
    methods: {
      handleSubmit() {
        // Adicione aqui a lógica de autenticação ou envio de dados
        console.log('Email:', this.email);
        console.log('Password:', this.password);
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
    margin: 0 auto;
  }
  
  /* Centralização da página */
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f3f4f6;
  }
  
  .form-title {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    text-align: center;
    color: #000;
  }
  
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
  
  .submit {
    display: block;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    background-color: #4F46E5;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    width: 100%;
    border-radius: 0.5rem;
    text-transform: uppercase;
  }
  
  .signup-link {
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
  }
  
  .signup-link a {
    text-decoration: underline;
  }
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

