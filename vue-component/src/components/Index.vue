<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
    <div>我是底部</div>
  </div>
</template>

<script>
  import HeaderComponent from './common/Header.vue'
  export default {
    name: 'Index',
    components:{
      "HeaderComponent":HeaderComponent
    },
    data () {
      return {
        msg: '我是主页'
      }
    }
  }
</script>
<style scoped>

</style>
