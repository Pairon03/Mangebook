<template>
    <div class="form-container">
      <form class="form" @submit.prevent="handleSubmit">
        <p class="form-title">Cadastre-se</p>
        <div class="input-container">
          <input
            type="text"
            v-model="nome"
            placeholder="Coloque seu nome"
            required
          />
          <span></span>
        </div>
        <div class="input-container">
          <input
            type="email"
            v-model="email"
            placeholder="Coloque seu email"
            required
          />
        </div>
        <div class="input-container">
          <input
            type="number"
            v-model="idade"
            placeholder="Coloque sua idade"
            required
          />
        </div>
        <div class="input-container">
          <select v-model="sexualidade" required>
            <option value="" disabled selected>Selecione sua sexualidade</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="nao-binario">Não-binário</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <button type="submit" class="submit">Cadastrar</button>
        <p class="signup-link">
          Já tem uma conta?
          <router-link to="/login">Faça login</router-link>
          <br />
          <img src="logo.png" alt="Logo da Empresa" class="logo" />
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
        nome: '',
        email: '',
        idade: null,
        sexualidade: '',
      };
    },
    methods: {
      handleSubmit() {
        // Implementar a lógica para cadastrar o usuário
        const userData = {
          nome: this.nome,
          email: this.email,
          idade: this.idade,
          sexualidade: this.sexualidade,
        };
        console.log('Usuário cadastrado:', userData);
        // Aqui você pode fazer uma chamada para uma API para enviar os dados
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
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -2px rgba(0, 0, 0, 0.05);
    margin: 0 auto; /* Centraliza horizontalmente */
  }
  
  /* Centralização da página */
  .form-container {
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    min-height: 100vh; /* Garante que ocupe toda a altura da tela */
    margin: 0;
    background-color: #f3f4f6; /* Exemplo de cor de fundo */
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
  .input-container select,
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
    background-color: #4f46e5;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    width: 100%;
    border-radius: 0.5rem;
    text-transform: uppercase;
  }
  
  .signup-link {
    color: #6b7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
  }
  
  .signup-link a {
    text-decoration: underline;
  }
  
  .voltar {
    text-align: center;
    margin-top: 1rem;
  }
  
  .voltar a {
    text-decoration: underline;
  }
  </style>
  