// Importa funções e componentes necessários do Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Importação das páginas para serem usadas nas rotas
import Index from './views/pages/index.vue';
import Cadastro from './views/pages/cadastro.vue';
import EsqueceuSenha from './views/pages/esqueceuasenha.vue';
import Explorar from './views/pages/explorar.vue';
import Lancamentos from './views/pages/lancamentos.vue';
import Login from './views/pages/login.vue';
import Loginadm from './views/pages/loginadm.vue';
import AdminRegister from './views/pages/admin-register.vue';
import Home from './views/pages/home.vue'; // Página Home

// Define as rotas da aplicação
const routes = [
  {
    path: '/', // Rota para a página inicial
    name: 'Index',
    component: Index // Componente a ser exibido na rota '/'
  },
  {
    path: '/admin-register', // Rota para a página de cadastro do administrador
    name: 'Admin-Register',
    component: AdminRegister // Componente de cadastro de administrador
  },
  {
    path: '/cadastro', // Rota para a página de cadastro de usuário
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/esqueceuasenha', // Rota para a página de recuperação de senha
    name: 'EsqueceuSenha',
    component: EsqueceuSenha
  },
  {
    path: '/explorar', // Rota para a página de exploração de livros
    name: 'Explorar',
    component: Explorar
  },
  {
    path: '/lancamentos', // Rota para a página de lançamentos de livros
    name: 'Lancamentos',
    component: Lancamentos
  },
  {
    path: '/login', // Rota para a página de login de usuário
    name: 'Login',
    component: Login
  },
  {
    path: '/loginadm', // Rota para a página de login do administrador
    name: 'Loginadm',
    component: Loginadm
  },
  {
    path: '/home', // Rota para a página home do administrador
    name: 'Home',
    component: Home // Componente de home do administrador
  }
];

// Cria uma instância do router com histórico de navegação em modo web
const router = createRouter({
  history: createWebHistory(), // Utiliza o histórico do navegador
  routes // Definindo as rotas
});

// Exporta a instância do router para ser usada na aplicação Vue
export default router;
