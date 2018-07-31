<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
    <FooterComponent :fromParent="fromParentMsg" :fromParent2="fromParent2"></FooterComponent>
  </div>
</template>

<script>
  import HeaderComponent from './common/Header.vue'
  import FooterComponent from './common/Footer.vue'
  export default {
    name: 'Index',
    components:{
      "HeaderComponent":HeaderComponent,
      "FooterComponent":FooterComponent
    },
    data () {
      return {
        fromParentMsg: '从index传来的参数',
        fromParent2:'我是第二个参数'
      }
    }
  }
</script>
<style scoped>

</style>
