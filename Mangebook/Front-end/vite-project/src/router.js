import { createRouter, createWebHistory } from 'vue-router';
import Index from './views/pages/index.vue';
import Cadastro from './views/pages/cadastro.vue';
import EsqueceuSenha from './views/pages/esqueceuasenha.vue';
import Explorar from './views/pages/explorar.vue';
import Lancamentos from './views/pages/lancamentos.vue';
import Login from './views/pages/login.vue';
import Loginadm from './views/pages/loginadm.vue';
import AdminRegister from './views/pages/admin-register.vue';
import Home from './views/pages/home.vue'; // Importe a página Home

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
{
     path: '/admin-register', 
     name: 'Admin-Register',
     component: AdminRegister 
},

  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/esqueceuasenha',
    name: 'EsqueceuSenha',
    component: EsqueceuSenha
  },
  {
    path: '/explorar',
    name: 'Explorar',
    component: Explorar
  },
  {
    path: '/lancamentos',
    name: 'Lancamentos',
    component: Lancamentos
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/loginadm',
    name: 'Loginadm',
    component: Loginadm
  },
  {
    path: '/home',
    name: 'Home',
    component: Home // Adicione a nova rota
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
