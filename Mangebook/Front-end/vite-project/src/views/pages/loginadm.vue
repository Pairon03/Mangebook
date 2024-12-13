<template>
    <div class="login-container">
      <form @submit.prevent="handleAdminSubmit" class="form">
        <p class="form-title">Login de Administrador</p>
        
        <div class="input-container">
          <input 
            type="text" 
            v-model="adminUsername" 
            placeholder="Usuário do Administrador" 
            required 
          />
        </div>
  
        <div class="input-container">
          <input 
            type="password" 
            v-model="adminPassword" 
            placeholder="Senha do Administrador" 
            required 
          />
        </div>
  
        <button type="submit" class="submit">Entrar</button>
        
        <p class="signup-link">
          <img src="logo.png" alt="Logo da Empresa" class="logo" />
        </p>
    
        <!-- Link de cadastro de administrador -->
        <p class="register-link">
          <router-link to="/admin-register">Cadastrar novo Administrador</router-link>
        </p>
  
        <p class="voltar">
          <router-link to="/login">Voltar ao Login usuário</router-link>
        </p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        adminUsername: '',
        adminPassword: '',
      };
    },
    methods: {
      async handleAdminSubmit() {
        try {
          // Logando os dados para depuração
          console.log('Enviando para o backend:');
          console.log(`Username: ${this.adminUsername}`);
          console.log(`Password: ${this.adminPassword}`);
  
          const response = await fetch('http://localhost:3000/admin-login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: this.adminUsername,
              password: this.adminPassword,
            }),
          });
  
          const data = await response.json();
          
          if (response.ok) {
            // Logando o token para garantir que está recebendo a resposta correta
            console.log('Token recebido:', data.token);
            // Salva o token no localStorage
            localStorage.setItem('adminToken', data.token);
  
            // Redireciona para o Dashboard/Home
            this.$router.push('/home');
          } else {
            // Exibe o erro retornado pelo backend
            console.error('Erro no login:', data.error);
            alert(data.error);
          }
        } catch (error) {
          console.error('Erro ao fazer login:', error);
          alert('Erro ao se conectar com o servidor.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos herdados da página principal */
  .form {
    background-color: #fff;
    display: block;
    padding: 1rem;
    max-width: 450px;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    margin: 0 auto;
  }
  
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
  
  .input-container input {
    background-color: #fff;
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 300px;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid #e5e7eb;
    margin: 8px 0;
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
  
  .submit {
    display: block;
    padding: 0.75rem 1.25rem;
    background-color: #4F46E5;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    width: 100%;
    border-radius: 0.5rem;
    text-transform: uppercase;
  }
  
  .admin-shortcut, .voltar, .register-link {
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    margin-top: 15px;
  }
  
  .admin-shortcut a, .voltar a, .register-link a {
    text-decoration: underline;
    color: #4F46E5;
  }
  </style>
  