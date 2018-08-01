<template>
  <div>
    <h3>Vuex购物车demo</h3>
    <!-- 商品的列表 -->
    <product></product>
  </div>
</template>

<script>
  import product from './product';
  export default {
    name: 'app',
    components: {
      product,
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
