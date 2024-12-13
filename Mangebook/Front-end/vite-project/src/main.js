// Importa a função `createApp` da Vue.js para criar uma nova instância da aplicação
import { createApp } from 'vue';

// Importa o componente principal App.vue
import App from './App.vue';

// Importa o roteador (router) configurado no arquivo de roteamento
import router from './router';

// Cria uma nova instância da aplicação Vue, passando o componente `App` como componente raiz
const app = createApp(App);

// Registra o roteador na instância da aplicação, o que permite navegar entre páginas
app.use(router);

// Monta a aplicação na div com id "app" no HTML, iniciando a aplicação Vue
app.mount('#app');
