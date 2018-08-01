<template>
  <div>
    <h3>Vuex购物车demo</h3>
    <!-- 商品的列表 -->
    <product></product>
    <cart></cart>
    <!--<info></info>-->
  </div>
</template>

<script>
  import info from './info';
  import cart from './cart';
  import product from './product';
  import { mapActions} from "vuex";
  export default {
    name: 'app',
    components: {
      product,cart
    },

    mounted(){
      const list = [
        {
          id: 11,
          name: '鱼香肉丝',
          price: 12,
        },
        {
          id: 22,
          name: '宫保鸡丁',
          price: 14
        },
        {
          id: 34,
          name: '土豆丝',
          price: 10
        },
        {
          id: 47,
          name: '米饭',
          price: 2
        }
      ];

      this.addShopList(list);
    },

    methods: {
      ...mapActions(['addShopList'])
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
