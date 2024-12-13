<template>
  <div class="register-container">
    <form @submit.prevent="handleAdminRegister" class="form">
      <!-- Título do formulário -->
      <p class="form-title">Cadastro de Administrador</p>

      <!-- Input para o nome de usuário -->
      <div class="input-container">
        <input
          type="text"
          v-model="adminUsername" <!-- Liga o valor do input à variável adminUsername -->
          placeholder="Usuário do Administrador"
          required <!-- Torna o campo obrigatório -->
        />
      </div>

      <!-- Input para a senha -->
      <div class="input-container">
        <input
          type="password"
          v-model="adminPassword" <!-- Liga o valor do input à variável adminPassword -->
          placeholder="Senha do Administrador"
          required <!-- Torna o campo obrigatório -->
        />
      </div>

      <!-- Botão para submeter o formulário -->
      <button type="submit" class="submit">Cadastrar</button>

      <!-- Exibição do logo -->
      <p class="signup-link">
        <img src="logo.png" alt="Logo da Empresa" class="logo" />
      </p>

      <!-- Link para a página de login -->
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
      adminUsername: '', // Armazena o nome de usuário inserido
      adminPassword: '', // Armazena a senha inserida
    };
  },
  methods: {
    // Método para lidar com o registro do administrador
    async handleAdminRegister() {
      try {
        // Exibe os dados no console para depuração
        console.log('Enviando dados para o backend para cadastro de administrador:');
        console.log(`Username: ${this.adminUsername}`);
        console.log(`Password: ${this.adminPassword}`);

        // Faz uma requisição POST para o backend com os dados do administrador
        const response = await fetch('http://localhost:3000/admin-register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Define o tipo do conteúdo como JSON
          },
          body: JSON.stringify({
            username: this.adminUsername, // Envia o nome de usuário
            password: this.adminPassword, // Envia a senha
          }),
        });

        // Lê a resposta do servidor
        const data = await response.json();

        if (response.ok) {
          alert('Administrador criado com sucesso!'); // Exibe mensagem de sucesso
          this.$router.push('/admin-login'); // Redireciona para a página de login do administrador
        } else {
          alert(data.error); // Exibe a mensagem de erro vinda do backend
        }
      } catch (error) {
        // Trata erros na conexão com o servidor
        console.error('Erro ao cadastrar administrador:', error);
        alert('Erro ao se conectar com o servidor.');
      }
    },
  },
};
</script>

<style scoped>
/* Container principal do formulário */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Altura mínima para ocupar a tela inteira */
  background-color: #f3f4f6; /* Cor de fundo */
}

/* Estilo do formulário */
.form {
  background-color: #fff; /* Fundo branco */
  display: block;
  padding: 1rem; /* Espaçamento interno */
  max-width: 450px; /* Largura máxima */
  border-radius: 0.5rem; /* Borda arredondada */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Sombra */
  margin: 0 auto;
}

/* Título do formulário */
.form-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600; /* Peso da fonte */
  text-align: center; /* Centralizado */
  color: #000;
}

/* Contêiner dos inputs */
.input-container input {
  background-color: #fff;
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  margin: 8px 0; /* Espaçamento entre os inputs */
}

/* Botão de envio */
.submit {
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #4f46e5; /* Cor de fundo */
  color: #ffffff; /* Cor do texto */
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase; /* Texto em maiúsculas */
}

/* Link para login */
.login-link {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  margin-top: 15px;
}
.login-link a {
  text-decoration: underline; /* Sublinhado */
  color: #4f46e5;
}
</style>
