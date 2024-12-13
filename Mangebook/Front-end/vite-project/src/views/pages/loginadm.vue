<template>
  <div class="login-container">
    <!-- Formulário de Login do Administrador -->
    <form @submit.prevent="handleAdminSubmit" class="form">
      <p class="form-title">Login de Administrador</p>
      
      <!-- Campo para o nome de usuário -->
      <div class="input-container">
        <input 
          type="text" 
          v-model="adminUsername"  <!-- Liga o valor do campo ao modelo `adminUsername` -->
          placeholder="Usuário do Administrador" 
          required 
        />
      </div>
  
      <!-- Campo para a senha -->
      <div class="input-container">
        <input 
          type="password" 
          v-model="adminPassword" <!-- Liga o valor do campo ao modelo `adminPassword` -->
          placeholder="Senha do Administrador" 
          required 
        />
      </div>
  
      <!-- Botão para submeter o formulário -->
      <button type="submit" class="submit">Entrar</button>
      
      <!-- Link para redirecionamento para o cadastro de administrador -->
      <p class="signup-link">
        <img src="logo.png" alt="Logo da Empresa" class="logo" />
      </p>
    
      <!-- Link para registro de novo administrador -->
      <p class="register-link">
        <router-link to="/admin-register">Cadastrar novo Administrador</router-link>
      </p>
  
      <!-- Link para voltar ao login de usuário comum -->
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
      adminUsername: '', // Variável para armazenar o nome de usuário do administrador
      adminPassword: '', // Variável para armazenar a senha do administrador
    };
  },
  methods: {
    // Função para processar o login do administrador
    async handleAdminSubmit() {
      try {
        // Logando os dados para depuração
        console.log('Enviando para o backend:');
        console.log(`Username: ${this.adminUsername}`);
        console.log(`Password: ${this.adminPassword}`);
  
        // Envia os dados para a API do backend para autenticação
        const response = await fetch('http://localhost:3000/admin-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.adminUsername, // Envia o nome de usuário
            password: this.adminPassword, // Envia a senha
          }),
        });
  
        const data = await response.json();
        
        if (response.ok) {
          // Logando o token para garantir que está recebendo a resposta correta
          console.log('Token recebido:', data.token);
          // Salva o token no localStorage para ser utilizado em requisições subsequentes
          localStorage.setItem('adminToken', data.token);
  
          // Redireciona o administrador para a página de home/painel
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
/* Estilos do formulário */
.form {
  background-color: #fff;
  display: block;
  padding: 1rem;
  max-width: 450px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  margin: 0 auto; /* Centraliza o formulário na tela */
}

/* Centraliza a página */
.login-container {
  display: flex;
  justify-content: center; /* Alinha horizontalmente */
  align-items: center; /* Alinha verticalmente */
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

/* Estilos para o botão de login */
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

/* Link para cadastro de novo administrador */
.signup-link {
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

/* Link de redirecionamento para cadastro */
.signup-link a {
  text-decoration: underline;
}

/* Link para o administrador */
.register-link {
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  margin-top: 15px;
}

.register-link a {
  text-decoration: underline;
  color: #4F46E5;
}

/* Link para voltar ao login de usuário */
.voltar {
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  margin-top: 15px;
}

.voltar a {
  text-decoration: underline;
  color: #4F46E5;
}
</style>
