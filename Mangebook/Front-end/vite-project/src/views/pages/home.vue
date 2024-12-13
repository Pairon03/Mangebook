<template>
  <div class="home-container">
    <header class="home-header">
      <h1>Painel do Administrador</h1>
      <div class="home-actions">
        <router-link to="/loginadm" class="btn">Sair</router-link>
      </div>
    </header>
    <BookList />
  </div>
</template>

<script>
import BookList from '@/components/BookList.vue';

export default {
  components: {
    BookList,
  },
};
</script>

<style scoped>
.home-container {
  padding: 20px;
  background-color: #f9f9f9;
}

.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 15px;
  background-color: #4F46E5;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
}

.btn:hover {
  background-color: #3730a3;
}
</style>
