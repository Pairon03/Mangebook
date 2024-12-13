<template>
    <div class="register-container">
      <form @submit.prevent="handleAdminRegister" class="form">
        <p class="form-title">Cadastro de Administrador</p>
  
        <!-- Input para o nome de usuário -->
        <div class="input-container">
          <input
            type="text"
            v-model="adminUsername"
            placeholder="Usuário do Administrador"
            required
          />
        </div>
  
        <!-- Input para a senha -->
        <div class="input-container">
          <input
            type="password"
            v-model="adminPassword"
            placeholder="Senha do Administrador"
            required
          />
        </div>
  
        <!-- Botão de envio -->
        <button type="submit" class="submit">Cadastrar</button>

        <p class="signup-link">
          <img src="logo.png" alt="Logo da Empresa" class="logo" />
        </p>
  
  
        <p class="login-link">
          <router-link to="/loginadm">Já tem uma conta? Entrar</router-link>
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
      async handleAdminRegister() {
        try {
          // Logando os dados para depuração
          console.log('Enviando dados para o backend para cadastro de administrador:');
          console.log(`Username: ${this.adminUsername}`);
          console.log(`Password: ${this.adminPassword}`);
  
          const response = await fetch('http://localhost:3000/admin-register', {
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
            alert('Administrador criado com sucesso!');
            this.$router.push('/admin-login'); // Redireciona para a página de login do administrador
          } else {
            alert(data.error);
          }
        } catch (error) {
          console.error('Erro ao cadastrar administrador:', error);
          alert('Erro ao se conectar com o servidor.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos semelhantes à página de login */
  .form {
    background-color: #fff;
    display: block;
    padding: 1rem;
    max-width: 450px;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    margin: 0 auto;
  }
  
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f3f4f6;
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
  
  .login-link {
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    margin-top: 15px;
  }
  
  .login-link a {
    text-decoration: underline;
    color: #4F46E5;
  }
  </style>
  